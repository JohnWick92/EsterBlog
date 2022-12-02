import { describe, it, expect } from 'vitest'
import request from 'supertest'
import app from '../../../app'

describe('Blogger controller test switch', () => {
  it('should singIn', async () => {
    const response = await request(app).post('/blogger/signIn').send({
      email: 'gmail',
      password: 'java',
    })
    expect(response.body).toHaveProperty('token')
    expect(response.status).toBe(200)
  })

  it('should auth with token', async () => {
    const response = await request(app).post('/blogger/auth').send({
      token: 'b16fbbb4-20df-4161-8212-d1f7c01e61a8',
    })
    expect(response.body).toHaveProperty('id')
    expect(response.status).toBe(200)
  })
})
