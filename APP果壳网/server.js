/**
 * Created by W J H on 2017/7/15.
 */
const express = require("express");
const static = require("express-static");
const mysql = require("mysql");
const server = express();

//1.连接数据库
let db = mysql.createConnection({
    host:"localhost",
    user:"root",
    database:'wjh'
})
server.get("/add",(request,response)=>{
    //mysql语句
    const sql = `select * from shell_ul`;
    db.query(sql,(err,data)=>{
        response.send({err:0,data});
        response.end();

    })

}).listen(8520)



server.use(static("www"))