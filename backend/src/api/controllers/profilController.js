const Profil = require("../models/profilModel");

exports.createProfil = async (req, res) => {
  try {
    const { email, profil_type } = req.body;

    if (!email || !profil_type) {
      return res
        .status(400)
        .json({ message: "Veuillez remplir tous les champs" });
    }

    const newProfil = new Profil({
      email,
      profil_type,
    });

    await newProfil.save();
    res
      .status(201)
      .json({ message: "Profil sauvegarder avec succès", profil: newProfil });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};
