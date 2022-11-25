import { PrismaClient } from '@prisma/client'
import { compare } from 'bcryptjs'
import { v4 as uuid } from 'uuid'

type signInInfoType = {
  email: string
  password: string
}

export default class SignInBloggerService {
  async execute({ email, password }: signInInfoType) {
    const prisma = new PrismaClient()
    const user = await prisma.blogger.findUnique({ where: { email: email } })
    if (!user) return null
    const validation = await compare(password, user.password)
    if (!validation) return null
    const hasToken = await prisma.token.findFirst({
      where: { BloggerId: user.id },
    })
    if (!hasToken) {
      const tokenCode = uuid()
      const token = await prisma.token.create({
        data: {
          id: uuid(),
          token: tokenCode,
          Blogger: { connect: { id: user.id } },
        },
      })
      if (token) prisma.$disconnect()
      const bloggerWithToken = {
        id: user.id,
        name: user.name,
        email: user.email,
        token: token.token,
      }
      return bloggerWithToken
    } else {
      const bloggerWithToken = {
        id: user.id,
        name: user.name,
        email: user.email,
        token: hasToken.token,
      }
      return bloggerWithToken
    }
  }
}
