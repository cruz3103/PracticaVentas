import express from 'express';
import { obtenerProductos, crearProductos } from '../controllers/productoController.js';

const router = express.Router();

router.get('/', obtenerProductos);
router.post('/', crearProductos);

export default router;