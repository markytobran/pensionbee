const path = require('path')
const express = require('express')
const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../views')
const contentRouter = require('./routers/content')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
app.use(express.static(publicDirectoryPath))
app.use(contentRouter)

module.exports = app
