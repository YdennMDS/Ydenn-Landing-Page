import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomInput from "../components/CustomInput";
import Icons from "../constants/Icons";
import Images from "../constants/Images";

export default function Survey() {
  const navigate = useNavigate();

  const [selectedText, setSelectedText] = useState<string | null>(null);
  const buttonCondition = !selectedText;

  const handleSelect = (text: string) => {
    setSelectedText(text);
  };

  return (
    <div className="max-h-screen h-screen w-full bg-slate-100 flex flex-col items-center">
      <div className="flex flex-row h-[100px] w-full bg-white mb-12">
        <div className="flex flex-row items-center">
          <a
            href="/"
            className="flex items-center justify-center rounded-full w-[50px] h-[50px] bg-[#F8F8F8] cursor-pointer ml-20"
          >
            <img
              src={Icons.LeftArrow}
              alt="left arrow"
              className="w-4 h-[14px]"
            />
          </a>
          <h3 className="font-medium text-base ml-8">Créer votre avatar</h3>
        </div>
        <div className="w-2/3 flex items-center justify-center ml-8">
          <img
            src={Images.YdennLogoFull}
            alt="logo ydenn"
            className="w-[88px] h-[68px]"
          />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-row items-center">
          <div className="flex flex-col items-center gap-2 -mr-8">
            <span className="border-2 border-[#A1AEBE] rounded-full w-8 h-8 flex items-center justify-center text-base font-medium text-[#242E39] bg-white">
              01
            </span>
            <h3 className="text-[#465668] font-medium text-xl font-inter">
              Questionnaire
            </h3>
          </div>
          <span className="h-0.5 w-[200px] bg-[#A1AEBE] flex mb-8"></span>
          <div className="flex flex-col items-center gap-2 -mx-12">
            <span className="border-2 border-[#A1AEBE] rounded-full w-8 h-8 flex items-center justify-center text-base font-medium text-[#242E39] bg-white">
              02
            </span>
            <h3 className="text-[#465668] font-medium text-xl font-inter">
              Vos coordonnées
            </h3>
          </div>
          <span className="h-0.5 w-[200px] bg-[#A1AEBE] flex mb-8"></span>
          <div className="flex flex-col items-center gap-2 -ml-6">
            <span className="border-2 border-[#A1AEBE] rounded-full w-8 h-8 flex items-center justify-center text-base font-medium text-[#242E39] bg-white">
              03
            </span>
            <h3 className="text-[#465668] font-medium text-xl font-inter">
              Votre avatar
            </h3>
          </div>
        </div>
        <div className="flex items-center my-14">
          <h2 className="text-black font-bold text-[40px] font-inter text-center">
            Mes amis disent de moi que je suis...
          </h2>
        </div>
      </div>
      <div className="flex flex-col gap-8 items-center w-full">
        {[
          "A. Introvertis, timide.",
          "B. Extraverti, force de proposition",
          "C. Introvertis, timide.",
          "D. Introvertis, timide.",
        ].map((text) => (
          <div
            key={text}
            onClick={() => handleSelect(text)}
            className="w-full max-w-[1070px] cursor-pointer"
          >
            <CustomInput Text={text} isSelected={selectedText === text} />
          </div>
        ))}
      </div>
      <div className="flex flex-row w-full items-center justify-center my-20">
        <button
          disabled={buttonCondition}
          onClick={() => {
            navigate("/yourcontact");
          }}
          className={`font-bold md:text-sm ${
            buttonCondition
              ? "bg-[#E5E5E5] text-[#00000026]"
              : "bg-[#211BB2] text-white"
          } w-[471px] lg:w-[301px] h-[64px] text-xl flex items-center justify-center rounded-[30px] font-inter`}
        >
          Suivant
        </button>
      </div>
    </div>
  );
}
