const app = require('./app')
const dotenv = require('dotenv')
dotenv.config({ path: '../config.env' })
const port = process.env.PORT || 80

app.listen(port, () => {
  console.log(`App is running on port ${port}`)
})
