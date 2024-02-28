const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const app = express();
const port = process.env.PORT;
const path = require('path');
const productsRouter = require("./src/router/productsRouter");

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"/public/")))

app.set("views","./src/views");
app.set("view engine","ejs");


app.use("/products",productsRouter)


app.get("/", (req,res) =>{

    // res.send('Hello borntoDev777');
    res.render('index',{username:'aof55+', customers:['aof','pat','dog']});

})

app.listen(port, ()=>{
    debug("Listening on port" + chalk.green(port));
})