const connectToMongo = require('./db')

const express = require('express')
connectToMongo();
const app = express();
const port = 3000

app.get('/', (req, res) => {
    res.send('hello sajid ')
})

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
})


