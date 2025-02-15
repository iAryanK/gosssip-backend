import { loadConfig } from './app/common/helper/config.helper'
import express from 'express'
import http from 'http'
import errorHandler from './app/common/middleware/error-handler.middleware'
// import router from './app/routes'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import { Server } from 'socket.io'
import { initPassport } from './app/common/services/passport-jwt.service'
import router from './app/routes'

loadConfig()
const port = Number(process.env.PORT) ?? 3000

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json())
app.use(morgan('dev'))

const initApp = async () => {
    initPassport()

    app.use('/api', router)

    app.use(errorHandler)

    const httpServer = http.createServer(app)
    const io = new Server(httpServer)

    io.on('connection', (socket) => {
        console.log('a user connected')
        socket.on('disconnect', () => {
            console.log('user disconnected')
        })
    })

    httpServer.listen(port, () => {
        console.log(`Server is running on port ${port}`)
    })
}

void initApp()
