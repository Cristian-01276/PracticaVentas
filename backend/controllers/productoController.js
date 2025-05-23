import { getProductos, addProducto} from '../models/productoModel.js';
//sirve como puente entre controller y models para  crear y obtener  //

export const obtenerProductos = (req, res) => {
    getProductos((err, resultados_prod) => {
        if (err) return res.status(500).json ({ error: err.message});
        res.json(resultados_prod);

         
    });
};

export const crearProducto = (req, res) => {
    const producto = req.body;
    addProducto(producto, (err, resultado_prod) => {
        if (err) return res.status(500).json({error: err.message});
        res.json({mensaje_prod:'Producto agregado', id:resultado_prod.insertId});
    });
};
