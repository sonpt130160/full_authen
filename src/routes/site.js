const express = require('express')
const router = express.Router()

const siteController = require('..\\app\\controllers\\SiteController')



router.get('/read', siteController.read)
router.post('/create', siteController.create)
router.put('/edit/:id', siteController.edit)
router.delete('/delete/:id', siteController.delete)



module.exports = router