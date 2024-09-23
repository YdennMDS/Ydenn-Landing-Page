import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Icons from "../constants/Icons";
import Images from "../constants/Images";
import profileService from "../services/profileService";

export default function YourContact() {
  const navigate = useNavigate();
  const location = useLocation();

  const profile = location.state?.profile || "";

  const user_emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const [email, setEmail] = useState({
    user_email: "",
  });

  function isValidUser_email(user_email: string) {
    return user_emailRegex.test(user_email);
  }

  const buttonCondition =
    !email.user_email || !isValidUser_email(email.user_email);

  const handleSubmit = async () => {
    try {
      await profileService.createProfil({
        email: email.user_email,
        profil_type: profile,
      });
      navigate("/youravatar", { state: { profile } });
    } catch (error) {
      console.error("Erreur lors de la sauvegarde du profil:", error);
    }
  };

  return (
    <div className="max-h-screen h-screen w-full bg-slate-100 flex flex-col items-center">
      <div className="flex flex-row h-[100px] w-full bg-white mb-12">
        <div className="flex flex-row items-center">
          <a
            href="/"
            className="flex items-center justify-center rounded-full w-[50px] h-[50px] bg-[#F8F8F8] cursor-pointer ml-4 sm:ml-20"
          >
            <img
              src={Icons.LeftArrow}
              alt="left arrow"
              className="w-4 h-[14px]"
            />
          </a>
          <h3 className="font-medium text-xs sm:text-base ml-2 sm:ml-8">
            Créer votre avatar
          </h3>
        </div>
        <div className="sm:w-2/3 flex items-center justify-center ml-[60px]">
          <img
            src={Images.YdennLogoFull}
            alt="logo ydenn"
            className="w-[88px] h-[68px]"
          />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-row items-center ">
          <div className="flex flex-col items-center gap-2 -mr-8">
            <div className="bg-[#211BB2] h-8 w-8 rounded-full flex items-center justify-center relative">
              <img src={Icons.Check} alt="checkmark" className="w-5" />
            </div>
            <h3 className="text-[#211BB2] font-bold text-sm sm:text-xl font-inter">
              Questionnaire
            </h3>
          </div>
          <span className="h-0.5 w-[100px] sm:w-[200px] bg-[#211BB2] flex mb-8"></span>
          <div className="flex flex-col items-center gap-2 -mx-12">
            <span className="border-2 border-[#A1AEBE] rounded-full w-8 h-8 flex items-center justify-center text-xs sm:text-base font-medium text-[#242E39] bg-white relative">
              02
            </span>
            <h3 className="text-[#465668] font-medium text-sm sm:text-xl font-inter">
              Vos coordonnées
            </h3>
          </div>
          <span className="h-0.5 w-[100px] sm:w-[200px] bg-[#A1AEBE] flex mb-8"></span>
          <div className="flex flex-col items-center gap-2 -ml-6">
            <span className="border-2 border-[#A1AEBE] rounded-full w-8 h-8 flex items-center justify-center text-xs sm:text-base font-medium text-[#242E39] bg-white relative">
              03
            </span>
            <h3 className="text-[#465668] font-medium text-sm sm:text-xl font-inter">
              Votre avatar
            </h3>
          </div>
        </div>
        <div className="flex items-center my-14">
          <h2 className="text-black font-bold text-[30px] sm:text-[40px] font-inter text-center">
            Soyez informés lors de la sortie de YDENN
          </h2>
        </div>
      </div>
      <div className="flex items-center flex-col gap-4 w-full max-w-[1070px] mt-16 mb-8">
        <label
          htmlFor=""
          className="text-[#404D61] font-inter font-medium text-xl"
        >
          Email
        </label>
        <input
          type="text"
          value={email.user_email}
          placeholder="Votre email"
          className="flex flex-row items-center w-[310px] sm:w-full sm:max-w-[1070px] max-h-[73px] h-screen bg-white rounded-lg justify-between pl-5 border-[#E1E3E6] outline-none"
          onChange={(e) => {
            setEmail({ ...email, user_email: e.target.value });
          }}
        />
      </div>
      <div className="flex flex-row w-full items-center justify-center my-20">
        <button
          disabled={buttonCondition}
          onClick={handleSubmit}
          className={`font-bold md:text-sm ${
            buttonCondition
              ? "bg-[#E5E5E5] text-[#00000026]"
              : "bg-[#211BB2] text-white"
          } w-[301px] lg:w-[471px] h-[64px] text-xl flex items-center justify-center rounded-[30px] font-inter`}
        >
          Voir mon avatar
        </button>
      </div>
    </div>
  );
}
