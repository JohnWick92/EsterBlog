import SignUpBloggerService from '../../services/Blogger/SignUp'
import { Request, Response } from 'express'

export default class SignInBloggerControl {
  async handle(request: Request, response: Response) {
    const { email, password, name } = request.body
    const signUpBloggerService = new SignUpBloggerService()
    const blogger = await signUpBloggerService.execute({
      email,
      password,
      name,
    })
    return response.status(200).json(blogger)
  }
}
