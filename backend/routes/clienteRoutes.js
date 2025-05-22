import express from 'express';
import { obtenerClientes, crearClientes } from '../controllers/clienteController.js';

const router = express.Router();

router.get('/', obtenerClientes);
router.post('/', crearClientes);

export default router;