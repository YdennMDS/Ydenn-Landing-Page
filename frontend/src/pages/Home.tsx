import { useState } from "react";
import CustomButton from "../components/CustomButton";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MobileRoomSelector from "../components/MobileRoomSelector";
import AvatarCard from "../components/avatarCard";
import Icons from "../constants/Icons";
import Images from "../constants/Images";
import roomData from "../data/roomData.json";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const roomInfo = isOpen ? roomData.privateRoom : roomData.openRoom;

  return (
    <div>
      <Header />
      <div className="flex flex-col lg:flex-row min-h-[650px] sm:min-h-[450px] mt-20 mb-16">
        <div className="w-full lg:w-1/2 flex justify-center items-center flex-col">
          <div className="h-[400px] sm:h-[425px] md:w-[587px] flex flex-col items-center lg:items-start">
            <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-[40px] leading-6 sm:leading-10 text-center lg:text-start font-inter">
              YDENN, une plateforme de discussion qui révolutionne le débat
            </h1>
            <p className="font-normal text-sm mx-2 md:mx-20 lg:mx-0 lg:text-xl my-12 text-center lg:text-start font-dmSans text-[#565656]">
              Une plateforme accessible à tous de manière anonyme et sécurisée,
              afin de permettre à chacun de vivre une expérience de réseau
              social centrée sur la qualité des échanges
            </p>
            <CustomButton
              text={"Créer votre avatar"}
              redirectUrl="#test"
              customStyles="bg-[#FFFFFF] w-3/5 sm:w-[278px] sm:h-[64px] lg:text-xl rounded-[30px] border-2 border-black font-semibold"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <img
            className="w-4/5 object-contain md:w-[510px] md:h-[415px] rounded-[52px]"
            src={Images.Illustration1}
            alt="Illustration"
          />
        </div>
      </div>
      <div className="w-full h-auto py-10 gap-10 md:py-0 md:gap-0 md:h-[449px] bg-[#F5F5F5] flex flex-col md:flex-row items-center justify-center">
        <div className="flex flex-col items-center max-w-[327px] h-[273px] gap-10 mx-8">
          <img
            src={Icons.Message}
            alt="Icon message"
            className="size-[104px]"
          />
          <h3 className="text-[#212121] font-bold text-2xl text-center font-poppins">
            Les rooms de discussion
          </h3>
          <p className="text-[#747474] text-lg font-normal text-center font-poppins">
            Un espace d'échange libre, privé sur différentes thématiques
          </p>
        </div>
        <div className="flex flex-col items-center max-w-[327px] h-[273px] gap-10 mx-8">
          <img src={Icons.Avatar} alt="icon avatar" className="size-[104px]" />
          <h3 className="text-[#212121] font-bold text-2xl text-center font-poppins">
            Création d’avatar
          </h3>
          <p className="text-[#747474] text-lg font-normal text-center font-poppins">
            Une plateforme ludique accessible à tous de manière anonyme.
          </p>
        </div>{" "}
        <div className="flex flex-col items-center max-w-[327px] h-[273px] gap-10 mx-8">
          <img
            src={Icons.Moderation}
            alt="icon modération"
            className="size-[104px]"
          />
          <h3 className="text-[#212121] font-bold text-2xl text-center font-poppins">
            Modération automatique
          </h3>
          <p className="text-[#747474] text-lg font-normal text-center font-poppins">
            Une modération viable qui assure la bienséance
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center text-center">
        <div className="flex flex-col my-16 gap-3">
          <h3 className="text-[#4343EF] text-base lg:text-[19px] font-semibold font-montserrat">
            OPEN ROOM & PRIVATE ROOM
          </h3>
          <h2 className="font-semibold text-2xl md:text-3xl lg:text-[40px] text-black font-poppins">
            Présentation des rooms de discussion
          </h2>
        </div>
        <div className="w-full pb-10 lg:pb-0">
          <div className="hidden sm:flex flex-col items-center lg:items-start lg:flex-row justify-center w-full gap-3 lg:gap-0">
            <div
              className="flex flex-col w-4/5 sm:w-1/2 lg:w-[26%] items-center lg:items-start gap-3"
              onClick={() => setIsOpen(false)}
            >
              <h3
                className={`${
                  isOpen ? "text-[#7E818A]" : "text-black"
                } font-medium text-base sm:text-xl md:text-2xl lg:text-3xl cursor-pointer font-poppins`}
              >
                Discussions dans les rooms
              </h3>
              <span
                className={`w-full h-1 flex ease-out transition-all ${
                  isOpen ? "bg-[#C4C4C4]" : "bg-[#211BBF]"
                }`}
              ></span>
            </div>
            <div
              className="flex flex-col w-4/5 sm:w-1/2 lg:w-[26%] items-center lg:items-end gap-3"
              onClick={() => setIsOpen(true)}
            >
              <h3
                className={`${
                  isOpen ? "text-black" : "text-[#7E818A]"
                } font-medium text-base sm:text-xl md:text-2xl lg:text-3xl cursor-pointer font-poppins`}
              >
                Visionnage dans les rooms
              </h3>
              <span
                className={`w-full h-1 flex ease-out transition-all duration-500 ${
                  isOpen ? "bg-[#211BBF]" : "bg-[#C4C4C4]"
                }`}
              ></span>
            </div>
          </div>
          <MobileRoomSelector onOptionChange={setIsOpen} />
          <div className="flex flex-col lg:flex-row justify-center items-center">
            <div className="mt-12 sm:mt-20 lg:ml-24 w-[300px] h-[480px] sm:h-[550px]">
              <img src={Images[roomInfo.image]} alt="room info" />
            </div>
            <div className="w-4/5 lg:w-[672px] h-auto min-h-[446px] border border-[#52525B80] rounded-2xl lg:ml-24 flex items-center flex-col lg:items-start">
              <p className="text-[#777777] text-sm lg:text-[17px] font-semibold mx-10 lg:mx-20 my-10 text-start font-inter leading-7">
                <span className="text-[#444444]">{roomInfo.starting} </span>
                {roomInfo.text}
              </p>
              <p className="text-[#777777] text-sm lg:text-[17px] font-semibold mx-10 lg:mx-20 my-10 text-start font-inter leading-7">
                <span className="text-[#444444]">{roomInfo.starting2} </span>
                {roomInfo.text2}
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center pb-20">
          <CustomButton
            text="Une question ? Nous sommes là pour vous"
            redirectUrl="#fourth-section"
            customStyles="bg-[#211BBF] w-[220px] lg:w-[531px] h-[64px] text-white lg:text-xl flex items-center justify-center rounded-[30px]"
          />
        </div>
      </div>
      <div id="avatar" className="w-full bg-[#F5F5F5]">
        <div className="flex flex-col items-center py-20">
          <h3 className="text-[#4343EF] font-semibold text-sm md:text-[19px] font-montserrat">
            Avatar YDENN
          </h3>
          <h2 className="text-[#24242E] text-2xl md:text-[29px] font-bold font-montserrat">
            Créer votre propre avatar
          </h2>
          <p className="font-normal text-sm sm:text-xl text-[#565656] mt-10 mx-8 lg:mx-72 text-center">
            Une plateforme accessible à tous de manière anonyme et sécurisée,
            afin de permettre à chacun de vivre une expérience de réseau social
            centrée sur la qualité des échanges
          </p>
        </div>
        <div
          id="test"
          className="w-full flex flex-wrap md:flex-row justify-center gap-6"
        >
          <AvatarCard
            imageLink={Images.Curieux}
            name="Le curieux"
            description="Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
            customStyles=""
          />
          <AvatarCard
            imageLink={Images.Initiateur}
            name="L'initiateur"
            description="Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
            customStyles=""
          />
          <AvatarCard
            imageLink={Images.Discret}
            name="Le discret"
            description="Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
            customStyles=""
          />
          <AvatarCard
            imageLink={Images.Mediateur}
            name="Le médiateur"
            description="Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
            customStyles=""
          />
        </div>
        <div className="flex justify-center py-20 pb-28 md:pb-24">
          <CustomButton
            text="Je commence le test pour créer mon avatar"
            redirectUrl="/survey"
            customStyles="bg-white w-[220px] lg:w-[551px] h-[64px] lg:text-xl flex items-center justify-center rounded-[30px] border-2 border-black text-center font-bold"
          />
        </div>
      </div>
      <section
        id="fourth-section"
        className="flex items-center justify-center bg-[#F5F5F5] pb-20"
      >
        <form
          action="https://formspree.io/f/xnqkenlo"
          method="POST"
          className="flex flex-col items-center gap-5 py-10 bg-[#FFFFFF] w-full sm:w-4/5 rounded-2xl"
        >
          <div className="w-4/5 lg:ml-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[36px] font-semibold text-[#101828] font-poppins">
              Intéressé par les débats constructifs sur YDENN ?
            </h2>
            <h4 className="font-medium text-[#565C69] text-sm sm:text-base md:text-lg lg:text-xl my-5 w-full font-inter">
              Envoyez-nous un message, et nous vous répondrons dans les
              meilleurs délais.
            </h4>
          </div>
          <label className="font-medium text-sm text-[#344054] flex flex-col gap-2 w-4/5 md:w-auto font-inter">
            Email
            <input
              className="w-full md:w-[480px] lg:w-[1064px] h-[48px] rounded-lg border border-[#D0D5DD] text-[#667085] pl-3"
              type="email"
              name="email"
              id="email"
              placeholder="you@company.com"
              required
            />
          </label>
          <label className="font-medium text-sm text-[#344054] flex flex-col gap-2 w-4/5 md:w-auto font-inter">
            Message
            <textarea
              name="message"
              id="message"
              className="border border-[#D0D5DD] w-full md:w-[480px] lg:w-[1064px] h-[128px] rounded-lg resize-none p-3"
            ></textarea>
          </label>
          <label className="font-normal text-base text-[#667085] w-4/5 lg:pl-4">
            <input
              type="checkbox"
              name="checkform"
              className="mr-3"
              id="checkform"
              required
            />
            Vous acceptez notre{" "}
            <span className="underline cursor-pointer">
              politique de confidentialité.
            </span>
          </label>
          <button
            type="submit"
            className="w-4/5 md:w-[480px] lg:w-[1064px] h-12 rounded-[30px] bg-[#211BB0] text-white text-xl font-inter font-normal"
          >
            Envoyer un message
          </button>
        </form>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
