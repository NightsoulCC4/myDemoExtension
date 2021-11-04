var mysql = require('mysql');
var bcrypt = require('bcrypt');
var userCounter = 1;

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "GazeGuardAdmin"
  });

//create database
/* con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE GazeGuardAdmin", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
}); */

//create table
function CreateTable(){
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = `CREATE TABLE Admin 
                (ID int not null Primary key, 
                    Username VARCHAR(15) not null, 
                    Password VARCHAR(30) not null, 
                    Name VARCHAR(30) not null, 
                    Surname VARCHAR(30) not null,
                    StudentID VARCHAR(10) not null,
                    Tel VARCHAR(10) not null,
                    Email VARCHAR(100) not null
                    )`;
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
      });
    });
  }

function Register(i ,username, password, name, surname, stdId, tel, email){
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = `INSERT INTO admin 
                (ID, Username, Password, Name, Surname, StudentID, Tel, Email) 
                VALUES ( '${i}',
                         '${username}', 
                         '${password}',
                         '${name}',
                         '${surname}',
                         '${stdId}',
                         '${tel}',
                         '${email}')`;
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
        userCounter++;
      });
    });
}

function Unregister(stdId){
    con.connect(function(err) {
        if (err) throw err;
        var sql = `DELETE FROM admin
                   WHERE StudentID = ${stdId}`;
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("Number of records deleted: " + result.affectedRows);
        });
      });
}

function ListAllUserAdmin(){
    con.connect(function(err) {
        if (err) throw err;
        var sql = `SELECT *
                   FROM admin`
        con.query(sql, function (err, result, fields) {
          if (err) throw err;
          console.log(result);
        });
      });
}

module.exports = {

}