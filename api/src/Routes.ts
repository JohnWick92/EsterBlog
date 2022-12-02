import { Request, Response, Router } from 'express'

import AuthBloggerControl from './controllers/Blogger/Auth'
import SignInBloggerControl from './controllers/Blogger/SignIn'

import CreatePostController from './controllers/Post/Create'

const router = Router()

const authBloggerControl = new AuthBloggerControl()
const signInBloggerControl = new SignInBloggerControl()

const createPostController = new CreatePostController()

router.get('/', (request: Request, response: Response) => {
  response.json('Ready :) ^-^')
})

router.post('/blogger/signIn', signInBloggerControl.handle)
router.post('/blogger/auth', authBloggerControl.handle)

router.post('/post/createPost', createPostController.handle)

export default router
