import Images from "../constants/Images";
import CustomButton from "./CustomButton";

function Header() {
  return (
    <header className="flex flex-row h-24 border-b border-[#EFEFEF] items-center">
      <div className="w-1/5 flex justify-center">
        <img src={Images.logo_ydenn} alt="logo ydenn" />
      </div>
      <nav className="lg:ml-24 w-[50%] sm:w-3/5 flex flex-row items-center">
        <ul className="flex flex-row gap-5 sm:gap-10">
          <li>
            <a
              href="/"
              className="font-medium text-[10px] lg:text-base text-black font-inter"
            >
              Accueil
            </a>
          </li>
          <li>
            <a
              href="/avatar"
              className="font-medium text-[10px] lg:text-base text-black font-inter"
            >
              Créer votre avatar
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="font-medium text-[10px] lg:text-base text-black font-inter"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex flex-row justify-center w-[30%] sm:w-1/5">
        <CustomButton
          text={"Je m'inscris"}
          customStyles={
            "bg-[#211BB0] w-[70%] sm:w-[168px] text-white mx-2 sm:mx-4"
          }
        />
        {/* <CustomButton
          text={"Créer votre avatar"}
          customStyles="border-2 border-[#111111] w-[177px] text-black"
        /> */}
      </div>
    </header>
  );
}

export default Header;
