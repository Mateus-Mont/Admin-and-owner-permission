import "express-async-errors"
import express, { Application } from 'express'
import {userRoutes} from "./routes/users.routes"
import { handleErrors } from "./errors"


export const app: Application = express()
app.use(express.json())

app.use('/users', userRoutes)
app.use(handleErrors)



