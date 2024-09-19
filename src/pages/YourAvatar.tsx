import CustomButton from "../components/CustomButton";
import Icons from "../constants/Icons";
import Images from "../constants/Images";

export default function YourAvatar() {
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
        <div className="w-2/3 flex items-center justify-center ml-[60px]">
          <img
            src={Images.YdennLogoFull}
            alt="logo ydenn"
            className="w-[88px] h-[68px]"
          />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-row items-center ml-12">
          <div className="flex flex-col items-center gap-2 -mr-8">
            <div className="bg-[#211BB2] h-8 w-8 rounded-full flex items-center justify-center">
              <img src={Icons.Check} alt="checkmark" className="w-5" />
            </div>
            <h3 className="text-[#211BB2] font-bold text-xl font-inter">
              Questionnaire
            </h3>
          </div>
          <span className="h-0.5 w-[200px] bg-[#211BB2] flex mb-8"></span>
          <div className="flex flex-col items-center gap-2 -mx-12">
            <div className="bg-[#211BB2] h-8 w-8 rounded-full flex items-center justify-center">
              <img src={Icons.Check} alt="checkmark" className="w-5" />
            </div>
            <h3 className="text-[#211BB2] font-bold text-xl font-inter">
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
        <div className="flex items-center mt-14">
          <h2 className="text-black font-bold text-[40px] font-inter text-center">
            Félicitations vous êtes <span>"INITIATEUR"</span>
          </h2>
        </div>
        <div className="flex flex-col items-center mt-4">
          <div className="flex flex-col items-center">
            <img
              src={Images.Initiateur2}
              alt=""
              className="w-[338px] h-[341px]"
            />
            <img
              src={Images.ItemsList}
              alt=""
              className="w-[805px] h-[117px] relative bottom-16"
            />
          </div>
          <div className="mx-4 sm:mx-64">
            <p className="text-center font-normal font-inter text-[22px] text-black">
              <span className="font-bold">
                Vous venez de débloquer votre premier item grâce à votre
                inscription.
              </span>{" "}
              Une fois sur l’application, continuez à débloquer de nouveaux
              items en atteignant vos objectifs et en progressant sur YDENN.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full items-center justify-center my-8">
        <CustomButton
          text={"Retour à l'accueil"}
          redirectUrl={"/"}
          customStyles="bg-[#211BBF] w-[220px] lg:w-[301px] h-[64px] text-white text-xl flex items-center justify-center rounded-[30px]"
        />
      </div>
    </div>
  );
}
