import { describe, it, expect } from 'vitest'
import request from 'supertest'
import app from '../../../app'

describe('Routes test switch', () => {
  it('Should test the Route /', async () => {
    const response = await request(app).get('/')
    expect(response.body).toBe('Ready :) ^-^')
  })
})
