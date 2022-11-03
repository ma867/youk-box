require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const jsxViewEngine = require('jsx-view-engine')
const db = require('./models/db')
const Song = require('./models/song')
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const getToken = require('./getToken')
const session = require("express-session");
const MongoStore = require("connect-mongo");
const { Router } = require('express')



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
app.use(getToken)

app.get('/track', async(req, res, next) => {
    /*
    https://api.spotify.com/v1/tracks/2TpxZ7JUBn3uw46aR7qd6V' \
        --header "Authorization: Bearer NgCXRK...MzYjw"
    */
    try {
        const result = await fetch('https://api.spotify.com/v1/tracks/2TpxZ7JUBn3uw46aR7qd6V', {
            method:"GET",
            headers: {
                Authorization: 'Bearer ' + res.locals.data.token
            }
        })
        const data = await result.json()
        res.locals.data.track = data 
        next()
    } 
    catch (error) {
        console.error(error)
        res.send(error)
    }

    },
    (req, res) => {
        res.send(res.locals.data.track)
        
    })



app.get('/search', async(req, res, next) => {
    /*
    https://api.spotify.com/v1/tracks/2TpxZ7JUBn3uw46aR7qd6V' \
        --header "Authorization: Bearer NgCXRK...MzYjw"

                const result = await fetch(`https://api.spotify.com/v1/search?q=track:King%20Kunta%20artist:Kendrick%20Lamar&limit=20&type=track&include_external=audio`, {

    */
        try {
            const artist = "Kendrick Lamar"
            const song = "King Kunta"
            const result = await fetch(`https://api.spotify.com/v1/search?q=track:${song}%20artist:${artist}&limit=20&type=track&include_external=audio`, {
                method:"GET",
                headers: {
                    Authorization: 'Bearer ' + res.locals.data.token
                }
            })
            const data = await result.json()
            res.locals.data.track = data.tracks.items
            next()
        } 
        catch (error) {
            console.error(error)
            res.send(error)
        }

    },
    (req, res) => {
        res.send(res.locals.data.track)
    })


//  --url 'https://api.spotify.com/v1/search?type=album&include_external=audio' \




app.use('/songs', require('./controllers/songRouteController'))
app.use('/playlists', require('./controllers/playlistRouteController'))
app.use('/user', require('./controllers/authController'))
// app.use('/spotifySongs', require('./controllers/spotifyApiController'))
// app.get('/', (req,res)=>{
//     res.send("YERRRRR IT'S WORKING")
// })x

app.listen(3004, ()=> {
    console.log('Listening on port 3004')
})





