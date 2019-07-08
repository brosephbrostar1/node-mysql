const express = require('express');
const mysql = require('mysql');

const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'admin',
  password : '6118150090Pj;',
  database : 'blog',
});

db.connect(function(err){
    if (err) throw err
    console.log("mysql is connected");
});

const api = express();

// creating db
api.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE blog'
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('database was created ... ');
    });
});

// create a table
api.get('/createposttable', (req, res) => {
    let sql = 'CREATE TABLE posts(ID int NOT NULL AUTO_INCREMENT, title varchar(255), body varchar(255), PRIMARY KEY (ID) )'
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('table was created ... ');
    });
});

// inserts a post into posts table
api.get("/addpost", (req,res) => {
    let post = {title : "first utube vid lmao", body: "hello worlddddddddddddddd"};
    let sql = 'INSERT INTO posts SET ?';
    db.query(sql, post, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('first post added ... ');
    });
});

// adding second post
api.get("/addpost2", (req,res) => {
    let post = {title : "i have 50 subs", body: "oh shit"};
    let sql = 'INSERT INTO posts SET ?';
    db.query(sql, post, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('second post added ... ');
    });
});

// select all posts
api.get("/getposts", (req,res) => {
    let sql = 'SELECT * FROM posts';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('posts gotten?');
    });
});

// select a single post
api.get("/getpost/:id", (req,res) => {
    let sql = 'SELECT * FROM posts WHERE ID =' + req.params.id;
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('post ' + req.params.id +' gotten');
    });
});

// delete post
api.get("/delpost/:id", (req,res) => {
    let sql = 'DELETE FROM posts WHERE ID =' + req.params.id;
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('post ' + req.params.id +' deleted');
    });
});

api.listen(5000, function(err){
    if (err)
        console.log(err)
    console.log('Server is live on port 5000')
});
