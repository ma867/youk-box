const mongoose = require('mongoose')
const { schema } = require('./song')

const playlistSchema = new mongoose.Schema({
    title: {type: String, required: true},
    author: {type: String, default: "Anonymous"},
    description: {type: String, default: "Just an awesome playlist by an equally awesome person"},
    songs: [{type: mongoose.Schema.Types.ObjectId, ref: "Song"}],
    username: String

})

const Playlist = mongoose.model('Playlist', playlistSchema)

module.exports = Playlist

