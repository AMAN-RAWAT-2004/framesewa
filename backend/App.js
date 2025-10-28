const express = require('express')
const userRoute = require('./routes/userRoute')
const app = express();
app.use(express.json({
    limit: '10kb'
}))

app.use('/api/users', userRoute)
module.exports = app