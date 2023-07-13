const route = require('express').Router()
const { getMateriel, updateMaterile, deleteMateriel, createMateriel, getMaterielInfo, getSpecifique } = require('../Controller/materiel.controller');


route.get('/get', getMateriel)
route.put('/update/:id',updateMaterile)
route.delete('/delete/:id', deleteMateriel)
route.get('/getSpecifique', getSpecifique)
route.post('/add',createMateriel)
route.get('/info/:id',getMaterielInfo)

module.exports = route;