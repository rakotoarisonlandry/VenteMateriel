const materielModel = require("../Model/materiel.model");

exports.createMateriel = async (req, res) => {
  try {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    const { design, state, quantity } = req.body;
    const materiel = new materielModel({
      design,
      etat: state,
      quantity,
    });
    await materiel.save();
    res.status(200).json({ message: "materile created successfully!" });
  } catch (e) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
exports.getMateriel = async (req, res) => {
  try {
    const materiel = await materielModel.find();
    res.status(200).json({ materiel });
  } catch (e) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
exports.deleteMateriel = async (req, res) => {
  try {
    const materielId = req.params["id"];
    const deletedMateriel = await materielModel.deleteOne({ _id: materielId });
    if (deletedMateriel.deletedCount === 1) {
      return res
        .status(200)
        .json({ message: "Materiel deleted successfully!" });
    } else {
      return res.status(403).json({ message: "Eror! Something went wrong" });
    }
  } catch (e) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
exports.updateMaterile = async (req, res) => {
  try {
    const materielId = req.params["id"];
    const { design, state, quantity } = req.body;
    const condition = { _id: materielId };
    const newInformation = {
      design,
      etat: state,
      quantity,
    };
    console.log(newInformation);
    await materielModel.updateOne(condition, { $set: newInformation });
    res.status(200).json({ message: "User updated successfully" });
  } catch (e) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
exports.getSpecifique = async (req, res) => {
  try {
    const abime = await materielModel.countDocuments({ etat: "Abime" });
    const mauvais = await materielModel.countDocuments({ etat: "Mauvais" });
    const bon = await materielModel.countDocuments({ etat: "Bon" });
    materielModel
      .aggregate([
        {
          $group: {
            _id: null, // Utilisez null pour regrouper toutes les documents
            total: { $sum: "$quantity" }, // Remplacez "votreChamp" par le champ sur lequel vous souhaitez effectuer la somme
          },
        },
      ])
      .then((result) => {
        res.status(200).json({
          materiel: {
            abime: abime,
            mauvais: mauvais,
            bon: bon,
            quantity: result[0].total,
          },
        });
      })
      .catch((err) => {
        res.status(200).json({ materiel: "error" });
      });
  } catch (e) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
exports.getMaterielInfo = async (req, res) => {
  try {
    const materielId = req.params["id"];
    const materiel = await materielModel.findById(materielId);
    res.status(200).json({ materiel });
  } catch (e) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
