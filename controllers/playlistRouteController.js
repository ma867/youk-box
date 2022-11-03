const express = require('express')
const router = express.Router()
const dataController = require('./dataController')
const viewController = require('./viewController')



router.use((req, res, next) => {
    if (req.session.loggedIn) {
      next()
    } else {
      res.redirect("/user/login")
    }
  })

router.get('/', dataController.playlistIndex, viewController.playlistIndex)

router.get('/new', dataController.songIndex, viewController.playlistNew)

router.delete('/:id', dataController.playlistDelete, viewController.playlistRedirectHome)

router.put('/:id', dataController.playlistUpdate, viewController.playlistRedirectShow)

router.post('/', dataController.playlistCreate, viewController.playlistRedirectHome)

router.get('/:id/edit', dataController.playlistShow, dataController.songIndex, viewController.playlistEdit)

router.get('/:id', dataController.playlistShow, viewController.playlistShow)

module.exports = router