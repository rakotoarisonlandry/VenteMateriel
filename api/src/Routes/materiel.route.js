const route = require('express').Router()
const { getMateriel, updateMaterile, deleteMateriel, getQuantity, createMateriel } = require('../Controller/materiel.controller');


route.get('/get', getMateriel)
route.put('/update/:id',updateMaterile)
route.delete('/delete/:id', deleteMateriel)
route.get('/getQuantity', getQuantity)
route.post('/add',createMateriel)

module.exports = route;