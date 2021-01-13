const express = require('express')
const cors = require('cors')

const indexRouter = require('../routes')
const testRouter = require('../routes/test')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/', indexRouter)
app.use('/iecho', testRouter)

module.exports = app
