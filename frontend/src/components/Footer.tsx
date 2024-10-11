import Images from "../constants/Images";

function Footer() {
  return (
    <footer className="w-full min-h-[420px] h-auto bg-black flex flex-col lg:flex-row justify-around items-center text-white font-inter">
      <div className="flex flex-row items-center lg:items-start lg:flex-col gap-3 sm:gap-5 md:gap-10 lg:gap-0">
        <div>
          <img className="w-24" src={Images.logo_footer} alt="logo ydenn" />
        </div>
        <div className="sm:w-[296px] mt-2">
          <p className="text-white font-normal text-sm text-center lg:text-start sm:text-base">
            Un espace en ligne où les individus peuvent échanger en participant
            à des discussions profondes et variées
          </p>
        </div>
        <div className="lg:mt-12 flex flex-col gap-3 sm:gap-0 items-center sm:flex-row">
          <svg
            className="mx-2 cursor-pointer w-5 sm:w-auto"
            xmlns="http://www.w3.org/2000/svg"
            width="37"
            height="37"
            viewBox="0 0 37 37"
            fill="none"
          >
            <path
              d="M8.28205 37H0.611161V12.297H8.28205V37ZM4.44248 8.92728C1.98958 8.92728 0 6.89553 0 4.44258C1.75568e-08 3.26433 0.468045 2.13435 1.30117 1.3012C2.1343 0.468056 3.26426 0 4.44248 0C5.6207 0 6.75066 0.468056 7.58378 1.3012C8.41691 2.13435 8.88496 3.26433 8.88496 4.44258C8.88496 6.89553 6.89455 8.92728 4.44248 8.92728ZM36.9917 37H29.3374V24.9747C29.3374 22.1088 29.2796 18.4335 25.3491 18.4335C21.3609 18.4335 20.7497 21.5472 20.7497 24.7683V37H13.0871V12.297H20.4442V15.6667H20.5515C21.5756 13.7258 24.0773 11.6776 27.8095 11.6776C35.5729 11.6776 37 16.79 37 23.4303V37H36.9917Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <ul className="gap-5 sm:gap-10 flex flex-row lg:flex-col">
        <li className="font-bold text-xs sm:text-base">Légal</li>
        <li className="text-xs sm:text-base">Conditions d'utilisation</li>
        <li className="text-xs sm:text-base">Mention Légales</li>
      </ul>
      <ul className="gap-5 sm:gap-10 flex flex-row lg:flex-col">
        <li className="font-bold text-xs sm:text-base">Menu</li>
        <li className="text-xs sm:text-base">La plateforme</li>
        <li className="text-xs sm:text-base">Les Rooms</li>
      </ul>
      <ul className="gap-5 sm:gap-10 flex flex-row lg:flex-col">
        <li className="font-bold text-xs sm:text-base">Contact</li>
        <li className="text-xs sm:text-base">ydenn.contact@gmail.com</li>
        <li className="text-xs sm:text-base">06XXXXXXXX</li>
      </ul>
    </footer>
  );
}

export default Footer;
