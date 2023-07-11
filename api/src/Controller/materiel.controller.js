const materielModel = require('../Model/materiel.model')

exports.createMateriel = async(req,res)=>{
    try{
        const {design,etat,quantity} = req.body
        const materiel = new materielModel({
            design,
            etat,
            quantity,
        })
        await materiel.save()
        res
        .status(200)
        .json({message: "materile created successfully!"})
    }catch(e){
        res
        .status(500)
        .json({message:'Internal Server Error'})
    }
}
exports.getMateriel = async(req,res)=>{
    try{
        const materiel = await  materielModel.find()
        res
        .status(200)
        .json({materiel})
    }catch(e){
        res
        .status(500)
        .json({message:'Internal Server Error'})
    }
}
exports.deleteMateriel = async(req,res)=>{
    try{
        const materielId = req.params['id']
        const deletedMateriel = await materielModel.deleteOne({_id: materielId})
        if(deletedMateriel.deletedCount === 1){
            return res
            .status(200)
            .json({message: "Materiel deleted successfully!"})
        }else{
            return res
            .status(403)
            .json({message: "Eror! Something went wrong"})
        }
    }catch(e){
        res
        .status(500)
        .json({message:'Internal Server Error'})
    }
}
exports.updateMaterile = async(req,res)=>{
    try{
        const materielId = req.params['id']
        const condition ={_id: materielId}
        const newInformation = {
            design,
            etat,
            quantity
        }
        await materielModel.updateOne(condition,{$set:newInformation})
        res
        .status(200)
        .json({message: 'User updated successfully'})
    }catch(e){
        res
        .status(500)
        .json({message:'Internal Server Error'})
    }
}
exports.getQuantity = async(req,res)=>{
    try{

    }catch(e){
        res
        .status(500)
        .json({message:'Internal Server Error'})
    }
}
exports.getMaterielInfo = async(req,res)=>{
    try{
        const materielId = req.params['id']
        const materiel = await  materielModel.findById(materielId)
        res
        .status(200)
        .json({materiel})
    }catch(e){
        res
        .status(500)
        .json({message:'Internal Server Error'})
    }
}