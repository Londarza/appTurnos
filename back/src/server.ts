import express from 'express'
import router from './routes'
import morgan from 'morgan'

const server = express()
server.use(express.json())
server.use(router)
server.use(morgan('dev'))
export default server