import { PrismaClient } from '@prisma/client'
import { hash } from 'bcryptjs'
import { v4 as uuid } from 'uuid'

type signUpType = {
  name: string
  email: string
  password: string
}

export default class SignUpBloggerService {
  async execute({ email, name, password }: signUpType) {
    const prisma = new PrismaClient()
    const passwordHash = await hash(password, 12)
    await prisma.blogger.create({
      data: {
        email: email,
        id: uuid(),
        name: name,
        password: passwordHash,
      },
    })
  }
}
