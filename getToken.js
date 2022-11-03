// import fetch from 'node-fetch'
require('dotenv').config()
const btoa = require('btoa')
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))

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

module.exports = getToken