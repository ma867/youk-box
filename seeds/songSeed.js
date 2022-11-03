require('dotenv').config()
const mongoose = require('mongoose')
const Song = require('../models/song')
const db = require('../models/db')


db.once('open', ()=>{
    console.log('connected to MongoDB Babygurrrlll')
})
 
const seedSongs = [
    {
        title: "Paranoid Android",
        artist: "Radiohead",
        album: "OK Computer",
    },
    {
        title: "Green & Gold",
        artist: "Lianne La Havas",
        album: "Blood",
    },
    {
        title: "Nights",
        artist: "Frank Ocean",
        album: "Blonde",
    },
    {
        title: "Your Teeth In My Neck",
        artist: "Kali Uchis",
        album: "Isolation",
    },
]

const seedDatabase = async () => {
    await Song.insertMany(seedSongs)
}

seedDatabase().then(() => {
    db.close()
})