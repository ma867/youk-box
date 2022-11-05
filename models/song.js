const mongoose = require('mongoose')

const songSchema = new mongoose.Schema({
    title: {type: String, required: true},
    artist: {type: String, required: true, default: "Unknown Artist"},
    album: {type: String, required: true, default: "Unknown Album"},
    artwork: {type: String, default: 'https://i.imgur.com/0FUT9eJ.png'},
    audio: {type: String},
    username: {type: String}
})

const Song = mongoose.model('Song', songSchema)

module.exports = Song

