import express from 'express';
import { obtenerVentas , crearVentas } from '../controllers/ventaController.js';

const router = express.Router();

//ruta//
router.get('/', obtenerVentas);
router.post('/', crearVentas);

//exportar//
export default router;