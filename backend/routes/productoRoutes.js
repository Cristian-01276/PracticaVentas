import express from 'express';
import { obtenerProductos , crearProducto } from '../controllers/productoController.js';

const router = express.Router();

//ruta//
router.get('/', obtenerProductos);
router.post('/', crearProducto);

//exportar//
export default router;
