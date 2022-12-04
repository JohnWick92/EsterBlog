import { CreatePostService } from './../../services/Post/Create'
import { describe, it, expect } from 'vitest'

describe('Post test switch', () => {
  it('should create a new post', async () => {
    const CreatePost = new CreatePostService()
    const result = await CreatePost.execute({
      article: 'Vitest',
      author: 'John',
      authorId: '1',
      description: 'Vitest',
      title: 'Vitest',
    })
    expect(result).toBe('0k')
  })

  it('should return null if author do not exists', async () => {
    const CreatePost = new CreatePostService()
    const result = await CreatePost.execute({
      article: 'Vitest',
      author: 'John',
      authorId: '',
      description: 'Vitest',
      title: 'Vitest',
    })
    expect(result).toBe(null)
  })
})
