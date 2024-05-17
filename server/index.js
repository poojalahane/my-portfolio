const express = require("express")
const cors = require('cors')
const dotenv = require('dotenv')
const portfolio = require('./routes/portfolioRoutes')

//dotenv configuration
dotenv.config()

//rest object
const app = express()

//middlewares
app.use(cors())
app.use(express.json())

//routes
app.use('/api/v1/portfolio', portfolio )

//port
const PORT = process.env.PORT || 8080;

//listen
app.listen(8080,()=>{
  console.log('Server is running... ON PORT : ', PORT);
})
