import SignInBloggerService from '../../services/Blogger/SignIn'
import { Request, Response } from 'express'

export default class SignInBloggerControl {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body
    const signInBloggerService = new SignInBloggerService()
    const bloggerWithToken = await signInBloggerService.execute({
      email,
      password,
    })
    return response.status(200).json(bloggerWithToken)
  }
}
