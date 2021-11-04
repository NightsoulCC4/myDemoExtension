var mysql = require('mysql');
var computerNum = 0;

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "GazeGuard"
  });

//create database
/* con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE GazeGuard", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
}); */

//create table
const createTable = function CreateTable(){
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = `CREATE TABLE PC_" + computerNum + "
                ( Password_Button VARCHAR(255) NOT NULL PRIMARY KEY, 
                  Title VARCHAR(255) NOT NULL, 
                  Website VARCHAR(255) NOT NULL)`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
      computerNum++;
    });
  });
}

//drop table
const dropTable = function DropTable(){
  con.connect(function(err) {
    if (err) throw err;
    var sql = "DROP TABLE PC_" + 1;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table deleted");
    });
  });
}

//Insert Data
const insertData = function InsertData(showPswdBtn, title, link){
  var link = encodeURI(link);
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = `INSERT INTO PC_" + 0 + "
               (passwordButton, Title, Website) 
               VALUES ( '" + showPswdBtn + "', 
                        '" + title + "', 
                        '" + link + "')`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  });
}

//Delete Data
const deleteData = function DeleteData(){
  con.connect(function(err) {
    if (err) throw err;
    var sql = "DELETE FROM PC_" + 0 + " WHERE address = 'passwordShowPasswordButton_0'";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Number of records deleted: " + result.affectedRows);
    });
  });
}

//Select Data
const listData = function ListAllPasswordWebsiteLinks(){
  con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM PC_0", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });
}

module.exports = {
  createTable,
  dropTable,
  insertData,
  deleteData,
  listData
}


