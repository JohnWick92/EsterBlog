import SignInBloggerService from '../../services/Blogger/SignIn'
import { AuthBloggerService } from '../../services/Blogger/Auth'
import { describe, expect, it } from 'vitest'

describe('Bloggler test switch', () => {
  it('should signIn a blogger', async () => {
    const singIn = new SignInBloggerService()
    const result = await singIn.execute({
      email: 'gmail',
      password: 'java',
    })
    expect(result).toHaveProperty('token')
  })

  it('should return null if email not exists', async () => {
    const singIn = new SignInBloggerService()
    const result = await singIn.execute({
      email: 'nonexisting@email.com',
      password: 'null',
    })
    expect(result).toBe(null)
  })

  it('should return null if password is incorrect', async () => {
    const singIn = new SignInBloggerService()
    const result = await singIn.execute({
      email: 'gmail',
      password: 'null',
    })
    expect(result).toBe(null)
  })

  it('should signIn a blogger with token authentication ', async () => {
    const auth = new AuthBloggerService()
    const result = await auth.execute({
      token: 'b16fbbb4-20df-4161-8212-d1f7c01e61a8',
    })
    expect(result).toHaveProperty('id')
  })

  it('should return null if token no exists', async () => {
    const auth = new AuthBloggerService()
    const result = await auth.execute({
      token: '',
    })
    expect(result).toBe(null)
  })
})
