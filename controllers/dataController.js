const Playlist = require('../models/playlist')
const Song = require('../models/song')


const dataController = {

    songIndex(req, res, next) {
        Song.find({ username: req.session.username }, (err, foundSongs) => {
            if (err) {
                console.error(err)
                res.status(400).send(err)
            }
            else {
                // res.send({songs:foundSongs })
                res.locals.data.songs = foundSongs
                next()

            }
        })
    },

    songDelete(req, res, next) {
        Song.findByIdAndDelete(req.params.id, (err, deletedSong) => {
            if (err) {
                console.error(err)
                res.status(400).send(err)
            }
            else {
                res.locals.data.song = deletedSong
                next()
            }
        })
    },

    songUpdate(req, res, next) {
        Song.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedSong) => {
            if (err) {
                console.error(err)
                res.status(400).send(err)
            }
            else {
                res.locals.data.song = updatedSong
                next()
            }
        })
    },

    songCreate(req, res, next) {
        req.body.artwork === '' ? req.body.artwork = "https://i.imgur.com/0FUT9eJ.png" : req.body.artwork = req.body.artwork
        req.body.username = req.session.username
        Song.create(req.body, (err, createdSong) => {
            if (err) {
                console.error(err)
                res.status(400).send(err)
            }
            else {
                res.locals.data.song = createdSong
                next()
            }
        })
    },

    songShow(req, res, next) {
        Song.findById(req.params.id, (err, foundSong) => {
            if (err) {
                console.error(err)
                res.status(400).send(err)
            }
            else {
                res.locals.data.song = foundSong
                next()

            }
        })
    },

    playlistIndex(req, res, next) {
        Playlist.find({username: req.session.username }, (err, foundPlaylists) => {
            if (err) {
                console.error(err)
                res.status(400).send(err)
            }
            else {
                res.locals.data.playlists = foundPlaylists
                console.log(res.locals.data.playlists)
                next()

            }
        })
    },

    playlistDelete(req, res, next) {
        Playlist.findByIdAndDelete(req.params.id, (err, deletedPlaylist) => {
            if (err) {
                console.error(err)
                res.status(400).send(err)
            }
            else {
                res.locals.data.song = deletedPlaylist
                next()
            }
        })
    },
    playlistShow(req, res, next) {
        Playlist.findById(req.params.id).populate('songs').exec((err, foundPlaylist) => {
            if (err) {
                console.error(err)
                res.status(400).send(err)
            }
            else {
                res.locals.data.playlist = foundPlaylist
                next()
            }
        })
    },
    playlistUpdate(req, res, next) {
        Playlist.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedPlaylist) => {
            if (err) {
                console.error(err)
                res.status(400).send(err)
            }
            else {
                res.locals.data.playlist = updatedPlaylist
                next()
            }
        })
    },

    playlistCreate(req, res, next) {
        req.body.artwork === '' ? req.body.artwork = "https://i.imgur.com/0FUT9eJ.png" : req.body.artwork = req.body.artwork
        Playlist.create(req.body, (err, createdPlaylist) => {
            if (err) {
                console.error(err)
                res.status(400).send(err)
            }
            else {
                res.locals.data.playlist = createdPlaylist
                next()
            }
        })
    },


}


module.exports = dataController