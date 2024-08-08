import "reflect-metadata"
import express from 'express'
import morgan from 'morgan'
import router from './routes'
import cors from 'cors'
const server = express()

server.use(cors())
server.use(express.json())
server.use(router)
server.use(morgan('dev'))


export default server