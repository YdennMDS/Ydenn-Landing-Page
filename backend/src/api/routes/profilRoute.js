module.exports = (app) => {
  const profilController = require("../controllers/profilController");

  app.post("/profil", profilController.createProfil);
};
