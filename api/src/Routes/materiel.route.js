const route = require('express').Router()
const { getMateriel, updateMaterile, deleteMateriel, getQuantity } = require('../Controller/materiel.controller');


route.get('/get', getMateriel)
route.put('/update/:id',updateMaterile)
route.delete('/delete/:id', deleteMateriel)
route.get('/getQuantity', getQuantity)

module.exports = route;