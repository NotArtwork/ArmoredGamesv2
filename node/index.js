const express = require('express')
const app = express()



app.listen(5002, (req, res) => {
    console.log('Hello from Port 5002')
})