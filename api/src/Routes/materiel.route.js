const route = require('express').Router()
const { getMateriel, updateMaterile, deleteMateriel, getQuantity, createMateriel, getMaterielInfo } = require('../Controller/materiel.controller');


route.get('/get', getMateriel)
route.put('/update/:id',updateMaterile)
route.delete('/delete/:id', deleteMateriel)
route.get('/getQuantity', getQuantity)
route.post('/add',createMateriel)
route.get('/info/:id',getMaterielInfo)

module.exports = route;