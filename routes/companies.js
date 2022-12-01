const express = require('express');
const router = express.Router();
const Controller = require('../controllers/companies');


router.get('/', async function(req, res, next){
    try{
        let data = await Controller.get();
        res.send(data);
    }catch(e){
        next(e);
    }
});


router.post('/', async function(req, res, next){
    try{
        let data = await Controller.create(req.body);
        res.send(data);
    }catch(e){
        next(e);
    }
});

router.put('/', async function(req, res, next){
    try{
        let data = await Controller.update(req.body);
        res.send(data);
    }catch(e){
        next(e);
    }
});

router.delete('/:id', async function(req, res, next){
    try{
        let data = await Controller.delete(req.params.id);
        res.send(data);
    }catch(e){
        next(e);
    }
});



module.exports = router