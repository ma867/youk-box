const mongoose = require('mongoose')


const playlistSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, default: "Just an awesome playlist by an equally awesome person"},
    songs: [{type: mongoose.Schema.Types.ObjectId, ref: "Song"}],
    username: {type: String}

})

const Playlist = mongoose.model('Playlist', playlistSchema)

module.exports = Playlist

