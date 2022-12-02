import router from './src/Routes'
import express from 'express'
import cors from 'cors'

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.use(router)

export default app
