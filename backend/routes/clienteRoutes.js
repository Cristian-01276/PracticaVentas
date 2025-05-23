import express from 'express';
import {obtenerClientes, crearCliente} from '../controllers/clienteController.js';

const router = express.Router();

//ruta//
router.get('/', obtenerClientes);
router.post('/', crearCliente);

//exportar//
export default router;
