const express = require("express")

//router object
const router = express.Router()

const {sendEmailController} = require("../controllers/portfolioController");



//routes
router.post("/sendEmail", sendEmailController)

//export
module.exports = router;