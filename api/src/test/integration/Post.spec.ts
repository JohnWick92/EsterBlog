import { describe, it, expect } from 'vitest'
import request from 'supertest'
import app from '../../../app'

describe('Post controller test switch', () => {
  it('should create a new post', async () => {
    const response = await request(app).post('/post/createPost').send({
      article: 'ControllerVitest',
      author: 'John',
      authorId: '1',
      description: 'ControllerVitest',
      title: 'ControllerVitest',
    })
    expect(response.body).toBe('0k')
    expect(response.status).toBe(200)
  })
})
