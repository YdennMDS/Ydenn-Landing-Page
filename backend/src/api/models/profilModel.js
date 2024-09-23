const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfilSchema = new Schema({
  email: {
    type: String,
    required: "Enter your email",
  },
  profil_type: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Profil", ProfilSchema);
