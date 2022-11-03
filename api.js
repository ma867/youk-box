import fetch from 'node-fetch'
import express, { response } from 'express'

import btoa from 'btoa'
const app = express()


const CLIENT_ID = 'ff6ecca143914ee88b50a6d60b671d17'
const CLIENT_SECRET = '82f69952f8734a8c8d8ae970cb56bbbe'


const getToken = async (req, res, next) => {

  const result = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
          'Content-Type' : 'application/x-www-form-urlencoded', 
          'Authorization' : 'Basic ' + btoa(CLIENT_ID+ ':' + CLIENT_SECRET)
      },
      body: 'grant_type=client_credentials'
  });

  const data = await result.json();
  console.log(data)
  res.locals.data.token = data.access_token
  next()
}




app.use((req, res, next ) => {
    res.locals.data = {}
    next()
})
app.use(getToken)

app.get('/', async(req, res, next) => {
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




app.listen(3000)