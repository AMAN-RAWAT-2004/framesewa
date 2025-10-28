const express=require('express')
const mongoose=require('mongoose')
const dotenv=require('dotenv')

const app=require('./App')
dotenv.config({
    path:'./config.env'
})

const DB=process.env.DATABASE.replace('<Password>',process.env.DATABASE_PASSWORD)

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true

}).then(() => {
    console.log('DB CONNECTED SUCCESFULLY ')
})
const PORT=process.env.PORT||5000;
app.listen(PORT,()=>{
    console.log(`The Server is Listing to the ${PORT}`)
})