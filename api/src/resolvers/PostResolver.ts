import { Arg, Ctx, Query, Resolver } from 'type-graphql'
import { Post } from '../dtos/models/Post'
import { Context } from '../../context'

@Resolver()
export class PostResolver {
  @Query(() => Post, { nullable: true })
  async getPost(
    @Arg('title') title: string,
    @Ctx() ctx: Context
  ): Promise<Post | null> {
    const post = await ctx.prisma.post.findUnique({
      where: { title: title },
    })

    if (!post) return null

    return post
  }

  @Query(() => [Post], { nullable: true })
  async getAllByDate(@Ctx() ctx: Context): Promise<Post[] | null> {
    const post = await ctx.prisma.post.findMany({
      orderBy: { createdAt: 'desc' },
    })

    if (!post) return null

    return post
  }

  @Query(() => [Post], { nullable: true })
  async getAllByLike(@Ctx() ctx: Context): Promise<Post[] | null> {
    const post = await ctx.prisma.post.findMany({
      orderBy: { like: 'desc' },
    })

    if (!post) return null

    return post
  }
}
