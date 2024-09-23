import axios from "../configAxios/axios";

interface Profile {
  email: string;
  profil_type: string;
}

const profileService = {
  createProfil: async (profile: Profile): Promise<void> => {
    try {
      const response = await axios.post("/profil", profile);
      // console.log("Profil sauvegardé:", response.data);
      response.data;
    } catch (error) {
      console.error("Erreur lors de la sauvegarde du profil:", error);
      throw error;
    }
  },
};

export default profileService;
