const express = require("express")
const router = express.Router()
const {serveIndex} = require("../controllers/site-controller")

router.get("/", serveIndex)

module.exports = router