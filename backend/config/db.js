import mysql from 'mysql2';

export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sena',
    database:'clientes_db',
    port: "3306"
});

db.connect(err => {
    if (err) throw err;
    console.log('Conectado a la base de dato de MYSQL');
});