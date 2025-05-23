import { db } from '../config/db.js'; 

//ejecuta//
export const addVenta = (venta, callback) => {
    const {id_cliente, id_producto, cantidad} = venta;
    db.query('select precio, stock from where id = ?', [id_producto], (err, results)=>{
        if (err) return callback(err); 
        if(results.length === 0){
            return callback (new Error('Producto no encontrado'));
        }
        const {precio, stock} = results[0];
        if (cantidad > stock) {
            return callback(new Error('Stock insuficiente'));
        }
        const total = precio * stock;
        db.query('insert into ventas (id_clientes, id_producto, cantidad, precio_unitario, total) values (?,?,?,?,?)',
            [id_cliente, id_producto, cantidad, precio, total],
            (err, results) => {
                if (err) return callback(err);
                db.query('update productos set stock = stcok - ? where id = ?', [cantidad, id_producto], (err2) => {
                    if(err2) return callback(err2);
                    callback(null, resultado);
                });
            }
        );
    });
};

export const getVenta = (callback) => {
    db.query(`
        select v.id, c.nombre as cliente, p.nombre_prod as producto,
        v.cantidad, v.precio_unitario, v.total, v.fecha from ventas v
        join clientes c on p v.id_clientes = c.id
        join productos p on v.id_producto = p.id
        order by v.fecha desc
        `, (err, results) => {
            if (err) return callback(err); 
            callback(null, results);
        });
};