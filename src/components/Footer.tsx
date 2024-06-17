function Footer() {
  return (
    <footer className="w-full min-h-[420px] h-auto bg-black flex flex-col lg:flex-row justify-around items-center text-white">
      <div className="flex flex-row items-center lg:items-start lg:flex-col gap-10 lg:gap-0">
        <div className="">
          <img className="w-24" src="/logo_ydenn.png" alt="" />
        </div>
        <div className="w-[296px] mt-2">
          <p className="text-white font-normal text-sm text-center lg:text-start sm:text-base">
            Un espace en ligne où les individus peuvent échanger en participant
            à des discussions profondes et variées
          </p>
        </div>
        <div className="lg:mt-12 flex flex-row">
          <svg
            className="mx-2 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="37"
            viewBox="0 0 28 37"
            fill="none"
          >
            <path
              d="M26.1652 20.8113L27.6177 14.1155H18.5387V9.77031C18.5387 7.93881 19.8065 6.15241 23.873 6.15241H28V0.452094C28 0.452094 24.2553 0 20.6741 0C13.1978 0 8.31112 3.20744 8.31112 9.01297V14.1167H0V20.8125H8.31112V37H18.5387V20.8125L26.1652 20.8113Z"
              fill="white"
            />
          </svg>
          <svg
            className="mx-2 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="43"
            height="38"
            viewBox="0 0 43 38"
            fill="none"
          >
            <path
              d="M13.5074 38C29.7345 38 38.6113 23.3766 38.6113 10.7175C38.6113 10.3082 38.6113 9.89319 38.5952 9.48398C40.3234 8.12332 41.815 6.43874 43 4.50917C41.3857 5.28331 39.6749 5.79352 37.9233 6.02324C39.7684 4.82379 41.1503 2.93655 41.8121 0.712296C40.0787 1.82921 38.1814 2.61329 36.2033 3.03017C34.8735 1.48986 33.1138 0.469453 31.1967 0.127003C29.2797 -0.215447 27.3123 0.139174 25.5993 1.13594C23.8864 2.1327 22.5234 3.71597 21.7216 5.64052C20.9198 7.56506 20.7238 9.72346 21.1641 11.7814C17.6562 11.5901 14.2244 10.599 11.0914 8.87234C7.95841 7.1457 5.19409 4.72209 2.97775 1.7587C1.8526 3.87222 1.50923 6.37224 2.01736 8.75111C2.52549 11.13 3.84703 13.2093 5.71362 14.5669C4.31489 14.5153 2.9469 14.1068 1.72 13.3744V13.5059C1.72241 15.72 2.42764 17.8652 3.71647 19.579C5.00531 21.2929 6.7987 22.4702 8.7935 22.9119C8.03633 23.1387 7.25418 23.2518 6.46881 23.248C5.91514 23.2498 5.36259 23.1941 4.81869 23.0814C5.38249 24.9873 6.4803 26.6537 7.95835 27.8472C9.4364 29.0406 11.2207 29.7014 13.0613 29.7369C9.93449 32.4079 6.07214 33.8565 2.09625 33.8495C1.39567 33.8527 0.695587 33.8087 0 33.7179C4.03532 36.5159 8.72174 38.0016 13.5074 38Z"
              fill="white"
            />
          </svg>
          <svg
            className="mx-2 cursor-pointer"
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
      <div className="footer-col2">
        <ul className="gap-10 flex flex-row lg:flex-col">
          <li className="font-bold">Légal</li>
          <li>Conditions d'utilisation</li>
          <li>Mention Légales</li>
        </ul>
      </div>
      <div className="footer-col3">
        <ul className="gap-10 flex flex-row lg:flex-col">
          <li className="font-bold">Menu</li>
          <li>La plateforme</li>
          <li>Les Rooms</li>
        </ul>
      </div>
      <div className="footer-col4">
        <ul className="gap-10 flex flex-row lg:flex-col">
          <li className="font-bold">Contact</li>
          <li>ydenn.contact@gmail.com</li>
          <li>Numéro de téléphone</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
