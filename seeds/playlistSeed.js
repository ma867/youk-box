require('dotenv').config()
const mongoose = require('mongoose')
const Playlist = require('../models/playlist')
const db = require('../models/db')


db.once('open', ()=>{
    console.log('connected to MongoDB Babygurrrlll')
})
 
const seedPlaylists = [
    {
        title: 'chill vibes',
        author: 'mel',
        songs: ['63584e5fb4dba70a3d5b6b3e', "63584e5fb4dba70a3d5b6b3f"
        ],
    },
 
]

const seedDatabase = async () => {
    await Playlist.insertMany(seedPlaylists)
}

seedDatabase().then(() => {
    db.close()
})