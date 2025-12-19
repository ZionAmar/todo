const db = require('../config/db_config');

async function getAll(userId){
    let sql = `SELECT * FROM tasks WHERE user_id = ?`;
    let [rows] = await db.query(sql,[userId]);    
    return rows;
}

async function add({text,userId}){
    let sql = `INSERT INTO tasks (text,user_id) VALUES (?,?)`;
    let [result] = await db.query(sql,[text,userId]); 
    return result.insertId;
}

module.exports ={
    getAll,
    add
}