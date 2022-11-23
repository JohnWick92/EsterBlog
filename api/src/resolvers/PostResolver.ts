import { Arg, Ctx, Mutation, Query, Resolver } from 'type-graphql'
import { PostInput } from '../dtos/input/PostInput'
import { Post } from '../dtos/models/Post'
import { Context } from '../../context'
import { v4 as uuid } from 'uuid'

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

  @Mutation(() => Post)
  async createPost(
    @Arg('data') data: PostInput,
    @Ctx() ctx: Context
  ): Promise<Post> {
    return await ctx.prisma.post.create({
      data: {
        id: uuid(),
        title: data.title,
        description: data.description,
        like: data.like,
        article: data.article,
        author: data.author,
        createdAt: data.createdAt,
        authorId: data.authorId,
      },
    })
  }
}
