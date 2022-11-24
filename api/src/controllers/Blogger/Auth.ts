import { AuthBloggerService } from './../../services/Blogger/Auth'
import { Request, Response } from 'express'

export default class AuthBloggerControl {
  async handle(request: Request, response: Response) {
    const { token } = request.body
    const authBloggerService = new AuthBloggerService()
    const blogger = await authBloggerService.execute({
      token,
    })
    return response.status(200).json(blogger)
  }
}
