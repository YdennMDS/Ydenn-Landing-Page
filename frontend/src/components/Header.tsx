import Images from "../constants/Images";
// import CustomButton from "./CustomButton";

function Header() {
  return (
    <header className="flex flex-row h-24 border-b border-[#EFEFEF] items-center">
      <div className="w-full flex justify-center">
        <img src={Images.logo_ydenn} alt="logo ydenn" />
      </div>
    </header>
  );
}

export default Header;
