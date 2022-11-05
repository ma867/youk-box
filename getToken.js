// import fetch from 'node-fetch'
require('dotenv').config()
const btoa = require('btoa')
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))

const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET


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

module.exports = getToken