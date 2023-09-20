import { User, Saved } from './database/model.js'
import session from 'express-session'
import express from 'express'
import morgan from 'morgan'
import viteExpress from 'vite-express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const { PORT, SESSION } = process.env
viteExpress.config({ printViteDevServerHost: true });

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))
app.use(session({ secret: SESSION, saveUninitialized: true, resave: false }));
app.use(express.json())

viteExpress.config({ printViteDevServerHost: true })

app.post('/login', async (req, res) => {
    const { email, passw } = req.body;
    const user = await User.findOne({ where: { email: email } });
  
    if (user && user.passw === passw) {
      req.session.userId = user.userId;
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }
  });






viteExpress.listen(app,PORT, () => console.log(`Listening on http://localhost:${PORT}`))