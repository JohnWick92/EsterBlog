import { PrismaClient } from '@prisma/client'

type authToken = {
  token: string
}

export class AuthBloggerService {
  async execute({ token }: authToken) {
    const prisma = new PrismaClient()
    const tokenRetreived = await prisma.token.findUnique({
      where: { token },
      include: { Blogger: true },
    })

    if (!tokenRetreived) return null

    return tokenRetreived.Blogger
  }
}
