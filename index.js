const express = require('express')
const serverTiming = require('server-timing-header')

const app = express()
app.use(serverTiming())
app.get('/', (req, res) => {
  req.serverTiming.from('response')
  req.serverTiming.to('response')
  res.send('Response')
})

app.listen('8880')