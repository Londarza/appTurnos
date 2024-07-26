import "reflect-metadata"
import express from 'express'
import morgan from 'morgan'
import router from './routes'
const server = express()
server.use(express.json())
server.use(router)
server.use(morgan('dev'))
export default server