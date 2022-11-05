require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const jsxViewEngine = require('jsx-view-engine')
const db = require('./models/db')
const Song = require('./models/song')
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const getToken = require('./getToken')
const session = require("express-session");
const MongoStore = require("connect-mongo");




const app = express()

app.use(express.urlencoded({extended:true}))

app.use((req,res, next) => {
    res.locals.data = {}
    next()
})


app.engine('jsx', jsxViewEngine.createEngine() )
app.set('view engine', 'jsx')
db.once('open', ()=>{
    console.log('connected to MongoDB Babygurrrlll')
})

app.use(
    session({
      secret: process.env.SECRET,
      store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
      saveUninitialized: true,
      resave: false,
    })
  )

app.use(methodOverride('overrideMethod'))
app.use(express.static('public'))
app.use(cors())
app.use(express.json())
app.use(getToken)


app.use('/songs', require('./controllers/songRouteController'))
app.use('/playlists', require('./controllers/playlistRouteController'))
app.use('/user', require('./controllers/authController'))
app.use('/search', require('./controllers/spotifyApiController'))

// app.get('/', (req,res)=>{
//     res.send("YERRRRR IT'S WORKING")
// })x



const PORT = process.env.PORT || 8000

// at the bottom
app.listen(PORT, () => {
  console.log('yerrrr its running', PORT)
})

