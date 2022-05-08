const express = require("express")
const router = express.Router()
const {test, randomFact, getFactByID, getFactFromAbout, getFactFromGameplay} = require("./controllers")

router.get("/test", test)
router.get("/random", randomFact)
router.get("/category/about", getFactFromAbout)
router.get("/category/gameplay", getFactFromGameplay)
router.get("/:id", getFactByID)

module.exports = router