import { PrismaClient } from '@prisma/client'
import { v4 as uuid } from 'uuid'

type createPost = {
  title: string
  description: string
  article: string
  author: string
  authorId: string
}

export class CreatePostService {
  async execute({ article, author, authorId, description, title }: createPost) {
    const prisma = new PrismaClient()
    const user = await prisma.blogger
      .findUnique({ where: { id: authorId } })
      .finally(() => prisma.$disconnect())
    if (!user) return null
    await prisma.post
      .create({
        data: {
          id: uuid(),
          title: title,
          description: description,
          like: 0,
          article: article,
          author: author,
          createdAt: new Date(),
          authorId: authorId,
        },
      })
      .finally(() => prisma.$disconnect())
    return '0k'
  }
}
