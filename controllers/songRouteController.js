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
  
router.get('/', dataController.songIndex, viewController.songIndex)

router.get('/new', viewController.songNew)

router.delete('/:id', dataController.songDelete, viewController.songRedirectHome)

router.put('/:id', dataController.songUpdate, viewController.songRedirectShow)

router.post('/', dataController.songCreate, viewController.songRedirectShow)

router.get('/:id/edit', dataController.songShow, viewController.songEdit)

router.get('/:id', dataController.songShow, viewController.songShow)

module.exports = router