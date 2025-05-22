import {
    obtenerVentas as obteneVentasModel,
    registrarVenta as registrarVentaModel
} from '../models/ventaModel.js';

export const registrarVenta = (req, res) => {
    const venta = req.body;
    if (!venta.id_cliente || !venta.id_producto || !venta.cantidad){
         return res.status(400).json({ error: 'faltan campos requeridos'});
    }
    registrarVentaModel(venta, (err, resultado) =>{
        if (err) return res.status(500).json({ error: err.message});
        res.status(201).json({ mensaje: 'venta registrada exitosamente', id:resultado.insertarId});
    });
};

export const obtenerVentas = (req, res) => {
    obteneVentasModel((err, ventas) =>{
        if(err) return res.status(500).json({ error: err.message});
        res.json(ventas);
    });
};
       