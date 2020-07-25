const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const db = require('./queries')
const app = express()
const port = 3001

app.use(cors())
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({ extended: true })
)

app.post('/api', db.createUserDB)

app.get('/api', db.getUserDB)

app.get('/api/clear', db.clearDB)
  
morgan('tiny')

app.listen(port, () => {
  console.log(`running on port ${port}.`)
})

