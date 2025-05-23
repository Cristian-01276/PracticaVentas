import { db } from '../config/db.js'; 

//ejecuta//
export const getVenta = (callback) => {
    db.query('select * from ventas', callback);
};

export const addVenta = (venta, callback) => {
    db.query('insert into ventas set ?', venta, callback );
};