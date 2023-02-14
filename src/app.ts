import express, { Application } from 'express'
import {userRoutes} from "./routes/users.routes"

export const app: Application = express()
app.use(express.json())

app.use('/users', userRoutes)



