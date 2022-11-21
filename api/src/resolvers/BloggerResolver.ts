import { Query, Mutation, Resolver, Arg, Ctx } from 'type-graphql'
import { BloggerSignUp } from '../dtos/input/BloggerSignUp'
import { BloggerSignIn } from '../dtos/input/BloggerSignIn'
import { Blogger } from '../dtos/models/Blogger'
import { compare, hash } from 'bcryptjs'
import { Context } from '../../context'
import { v4 as uuid } from 'uuid'

type signIntype = {
  id: string
  name: string
  email: string
  token: string
}

@Resolver()
export class BloggerResolver {
  @Query(() => Blogger, { nullable: true })
  async getToken(
    @Arg('token') token: string,
    @Ctx() ctx: Context
  ): Promise<Blogger | null> {
    const tokenRetreived = await ctx.prisma.token.findUnique({
      where: { token },
      include: { Blogger: true },
    })

    if (!tokenRetreived) return null

    return tokenRetreived.Blogger
  }

  @Mutation(() => Blogger)
  async signUp(
    @Arg('data') data: BloggerSignUp,
    @Ctx() ctx: Context
  ): Promise<Blogger> {
    const hashedPasswd = await hash(data.password, 10)
    return await ctx.prisma.blogger.create({
      data: {
        id: uuid(),
        name: data.name,
        email: data.email,
        password: hashedPasswd,
      },
    })
  }

  @Mutation(() => Blogger, { nullable: true })
  async signIn(
    @Arg('data') data: BloggerSignIn,
    @Ctx() ctx: Context
  ): Promise<signIntype | null> {
    const blogger = await ctx.prisma.blogger.findUnique({
      where: { email: data.email },
    })
    if (!blogger) return null

    const validation = await compare(data.password, blogger.password)

    if (!validation) return null

    const tokenCode = uuid()

    const token = await ctx.prisma.token.create({
      data: {
        id: uuid(),
        token: tokenCode,
        Blogger: { connect: { id: blogger.id } },
      },
    })

    const bloggerWithToken = {
      id: blogger.id,
      name: blogger.name,
      email: blogger.email,
      token: token.token,
    }
    return bloggerWithToken
  }
}
