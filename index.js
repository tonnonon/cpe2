const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) =>
  res.send('Greetings My name is Manit ittichote')
)

app.listen(port, () =>
  console.log(`App running on port ${port}.`)
)
