const express = require('./config/express')
const server = express()

server.listen(3000, () => console.log('Server start on port 3000') )