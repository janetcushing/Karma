/***********************************************
 * Connection to the database
//  * we dont need this for sequelize so i am renaming it
 ***********************************************/

var mysql = require("mysql");
var connection;

<<<<<<< HEAD:test/connection.js
// if(process.env.JAWSDB_URL){
//     connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {

connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "karma_db"
});
// };
=======
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {

    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "root",
        database: "karma_db"
    });
};
>>>>>>> 87639f8fb267aa3bf530cdb04769c9d0f8bcd969:config/connection_dont_need.js

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("I have successfully connected to the database");
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;