import express from 'express'
import morgan from 'morgan'
import viteExpress from 'vite-express'
import dotenv from 'dotenv'

dotenv.config()


const app = express()
const { PORT, SESSION } = process.env


ViteExpress.config({ printViteDevServerHost: true });

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))
app.use(session({ secret: SESSION, saveUninitialized: true, resave: false }));
app.use(express.json())

viteExpress.config({ printViteDevServerHost: true })






viteExpress.listen(app,port, () => console.log(`Listening on http://localhost:${port}`))