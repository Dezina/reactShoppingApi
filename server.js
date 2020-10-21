//Importing required Node Modules
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const cors = require('cors')
// const cron = require('node-cron');
// require('dotenv').config({ path: __dirname + '/config/.env' });


//Decalaring Variables
const app = express()
// const PORT = process.env.PORT || 8000
const PORT = 8000


// Middlewares
app.use(cors())
app.use(bodyParser.json());


//Sending a meassge 
app.get('/', (re, res) => {
    res.send(`<h1>Server is up and Running at port: ${PORT}<h1>`)
})


//Connecting to MongoDB Server
mongoose.connect("mongodb+srv://Dezina:dzi123**@cluster0.sosgh.mongodb.net/shopchat?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MongoDB Database Connection Established Successfully");
    })
    .catch((err) => {
        throw err
    })




//***********************************************       Write Your code Here       ************************************************//


//Importing Routes
const AdminProductsRoute = require('./routes/adminProducts')
const UserProductsRoute = require('./routes/userProducts')

//Using Routes
app.use('/adminProducts', AdminProductsRoute);
app.use('/userProducts', UserProductsRoute);


//****************************************************************************************************//


//Running Our Server on PORT : 3000 
app.listen(PORT, console.log(`Server is listening at Port: ${PORT}`))