const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host : '127.0.0.1',
    user : 'root',
    password : 'root',
    database : 'STUDY'
});


async function runQuery() {
    let conn;

    try{
        conn = await pool.getConnection();
        const rows = await conn.query('SELECT * FROM student');
        console.log(rows);

    }catch(err){
        throw err;
    }finally{
        if(conn) conn.release();
    }
}

runQuery();