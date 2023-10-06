import { User, Saved } from './database/model.js'
import session from 'express-session'
import express from 'express'
import morgan from 'morgan'
import viteExpress from 'vite-express'
import dotenv from 'dotenv'
import axios from 'axios'

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
  }
);

app.post('/savedData', async (req, res) => {
  let user = await User.findByPk(req.session.userId)
  await user.createSaved({savedData: req.body.conversion})
  let allSaved = await Saved.findAll({where: {userId: user.userId}})
  res.status(200).json(allSaved)
})

app.get('/fetchData', async (req, res) => {
  let user = await User.findByPk(req.session.userId)
  let data = await Saved.findAll({where: {userId: user.userId}})
  res.status(200).json(data)
})

app.post('/deleteData/:savedId', async (req, res) => {
  let data = await Saved.findOne({where: {savedId: +req.params.savedId}})
  await data.destroy()
  let allSaved = await Saved.findAll({where: {userId: +req.session.userId}})
  res.status(200).json(allSaved)
})

app.post('/signUp', async (req,res) => {
  const { email, passw } = req.body
  const user = await User.create({ email: email, passw: passw})
  req.session.userId = user.userId
  res.json({ success: true})
})

app.post('/logout', async (req,res) => {
  req.session.destroy();
  res.json({ success: true });
})

viteExpress.listen(app,PORT, () => console.log(`Listening on http://localhost:${PORT}`))