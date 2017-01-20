const express = require('express')
const app = express()

app.use(express.static(__dirname + '/docs'))
app.listen(5000, () => console.log('Listening'))