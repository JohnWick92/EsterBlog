import { CreatePostService } from '../../services/Post/Create'
import { Request, Response } from 'express'

export default class CreatePostController {
  async handle(request: Request, response: Response) {
    const { title, description, like, createdAt, author, authorId, article } =
      request.body
    const createPostService = new CreatePostService()
    const post = await createPostService.execute({
      title,
      description,
      like,
      createdAt,
      author,
      authorId,
      article,
    })
    return response.status(200).json(post)
  }
}
