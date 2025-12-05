const db = require('../config/db_config');

async function getAll(){
    let sql = `SELECT name FROM categories`;
    let [rows] = await db.query(sql);    
    return rows;
}

async function add({name,userId}){
    let sql = `INSERT INTO categories (name,user_id) VALUES (?,?)`;
    let [result] = await db.query(sql,[name,userId]); 
    return result.insertId;
}


module.exports ={
    getAll,
    add
}