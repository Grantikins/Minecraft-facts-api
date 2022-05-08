const express = require("express")
const port = process.env.PORT || 3000
const path = require("path")
const bodyParser = require("body-parser")
const routes = require("./routes/api-routes")
const siteRoutes = require("./routes/site-routes")
app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(__dirname))
app.use("/", siteRoutes)
app.use("/facts", routes)

app.listen(port, () => console.log("listening on port " + port))
