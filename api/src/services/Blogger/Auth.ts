import { PrismaClient } from '@prisma/client'

type authToken = {
  token: string
}

export class AuthBloggerService {
  async execute({ token }: authToken) {
    const prisma = new PrismaClient()
    const tokenRetreived = await prisma.token
      .findUnique({
        where: { token },
        include: { Blogger: true },
      })
      .finally(() => prisma.$disconnect())
    if (!tokenRetreived) return null

    const bloggerWithToken = {
      id: tokenRetreived.Blogger.id,
      name: tokenRetreived.Blogger.name,
      email: tokenRetreived.Blogger.email,
      token: tokenRetreived.token,
    }
    return bloggerWithToken
  }
}
