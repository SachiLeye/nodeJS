const express = require('express');
const router = express.Router();

const hp = require('../controller/HpCon');

router.get('/', hp.nom);
router.get('/Maria', hp.Maria); 
router.get('/Sachi', hp.Sachi); 
router.get('/Lette', hp.Lette); 
router.get('/Leyesa', hp.Leyesa); 


module.exports = router;

