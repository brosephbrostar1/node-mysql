const express = require('express');
const mysql = require('mysql');



const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'admin',
  password : '6118150090Pj;',
});

db.connect(function(err){
    if (err) throw err
    console.log("mysql is connected");
});

const api = express();
api.listen(5000, function(err){
    if (err)
        console.log(err)
    console.log('Server is live on port 5000')
});
