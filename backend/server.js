const express = require('express');
const mysql= require('mysql2');
const bodyParser = require('body-parser');

const app =express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Mysql connection so gooooood...........
const connection =  mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'242424',
    database:'payment',
})
connection.connect((err) => {
    if (err) {
      console.error('Error connecting to database:', err);
      return;
    }
    console.log('Connected to MySQL Database');
  });





  //Start Server 
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, ()=> {
    console.log('Server is now Running on port || 5000 ');
  });