import express from 'express';
const router = express.Router();

import Nota from '../models/nota';

//Agregar una nota
router.post('/nota-nueva', async (req,res) => {
    const body = req.body;
    try {
        const notadb = await Nota.create(body);
        res.status(200).json(notadb);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrió un error',
            error
        });
    }
});

router.get('/nota/:id', async(req,res) => {
    const _id = req.params.id;
    try {
        const notadb = await Nota.findOne({_id});
        res.json(notadb);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrió un error',
            error
        });
    }
});

router.get('/nota', async(req,res) => {
    try {
        const notadb = await Nota.find();
        res.json(notadb);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrió un error',
            error
        });
    }
});

router.delete('/nota/:id', async (req,res) => {
    const _id = req.params.id;
    try {
        const notadb = await Nota.findByIdAndDelete({_id});
        if (!notadb) {
            return res.status(400).json({
                mensaje: 'No se encontró el id indicado',
                error
            });
        }
        res.json(notadb);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrió un error',
            error
        });
    }
});

router.put('/nota/:id', async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
        const notadb = await Nota.findByIdAndUpdate(
            _id,
            body,
            {new: true}
        );
        res.json(notadb);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

module.exports = router;