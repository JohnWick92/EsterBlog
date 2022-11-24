import { PrismaClient } from '@prisma/client'
import { v4 as uuid } from 'uuid'

type createPost = {
  title: string
  description: string
  article: string
  author: string
  authorId: string
  createdAt: Date
  like: number
}

export class CreatePostService {
  async execute({
    article,
    author,
    authorId,
    createdAt,
    description,
    title,
  }: createPost) {
    const prisma = new PrismaClient()
    await prisma.post.create({
      data: {
        id: uuid(),
        title: title,
        description: description,
        like: 0,
        article: article,
        author: author,
        createdAt: createdAt,
        authorId: authorId,
      },
    })
    return '0k'
  }
}
