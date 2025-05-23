import { getVenta, addVenta} from '../models/ventaModel.js';
//sirve como puente entre controller y models para  crear y obtener  //

export const obtenerVentas = (req, res) => {
    getVenta((err, resultados_prod) => {
        if (err) return res.status(500).json ({ error: err.message});
        res.json(resultados_prod);

         
    });
};

export const crearVentas = (req, res) => {
    const venta = req.body;
    if (!venta.id_cliente || !venta.id_id_producto || !venta.cantidad) {
        return res.status(400).json({error: 'Faltan campos requeridos'});
    }
    addVenta(venta, (err, resultado_prod) => {
        if (err) return res.status(500).json({error: err.message});
        res.json({mensaje_prod:'Venta agregada', id:resultado_prod.insertId});
    });
};


