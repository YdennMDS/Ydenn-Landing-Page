import CustomButton from "../components/CustomButton";
import Footer from "../components/Footer";
import Header from "../components/Header";
import AvatarCard from "../components/avatarCard";
import Icons from "../constants/Icons";
import Images from "../constants/Images";

function Home() {
  return (
    <div>
      <Header />
      <div className="flex flex-col lg:flex-row min-h-[650px] my-20">
        <div className="w-full lg:w-1/2 flex justify-center items-center flex-col">
          <img
            src={Images.Dot}
            alt=""
            className="absolute -z-10 top-[420px] left-[68px]"
          />
          <div className="h-[425px] md:w-[587px] flex flex-col items-center lg:items-start">
            <h1 className="font-medium text-xl sm:text-2xl md:text-3xl lg:text-[40px] leading-10 text-center lg:text-start">
              YDENN, une plateforme de discussion qui révolutionne le débat{" "}
            </h1>
            <p className="font-normal text-sm mx-2 md:mx-20 lg:mx-0 lg:text-xl my-12 text-center lg:text-start">
              Une plateforme accessible à tous de manière anonyme et sécurisée,
              afin de permettre à chacun de vivre une expérience de réseau
              social centrée sur la qualité des échanges
            </p>
            <CustomButton
              text={"Rejoindre notre communauté"}
              customStyles="bg-[#211BBF] w-3/5 sm:w-[385px] text-white text-xl"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <img src={Images.Illustration1} alt="" />
        </div>
      </div>
      <div className="w-full h-auto py-10 gap-10 md:py-0 md:gap-0 md:h-[449px] bg-[#F5F5F5] flex flex-col md:flex-row items-center justify-center">
        <div className="flex flex-col items-center max-w-[327px] h-[273px] gap-10 mx-8">
          <img src={Icons.Message} alt="" className="size-16" />
          <h3 className="text-[#212121] font-bold text-2xl text-center">
            Les rooms de discussion
          </h3>
          <p className="text-[#747474] text-lg font-normal text-center">
            Un espace d'échange libre, privé sur différentes thématiques
          </p>
        </div>
        <div className="flex flex-col items-center max-w-[327px] h-[273px] gap-10 mx-8">
          <img src={Icons.Avatar} alt="" className="size-16" />
          <h3 className="text-[#212121] font-bold text-2xl text-center">
            Création d’avatar
          </h3>
          <p className="text-[#747474] text-lg font-normal text-center">
            Une plateforme ludique accessible à tous de manière anonyme.
          </p>
        </div>{" "}
        <div className="flex flex-col items-center max-w-[327px] h-[273px] gap-10 mx-8">
          <img src={Icons.Moderation} alt="" className="size-16" />
          <h3 className="text-[#212121] font-bold text-2xl text-center">
            Modération automatique
          </h3>
          <p className="text-[#747474] text-lg font-normal text-center">
            Une modération viable qui assure la bienséance
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center text-center">
        <div className="flex flex-col my-16 gap-3">
          <h3 className="text-[#4343EF] text-[19px] font-semibold">
            OPEN ROOM & PRIVATE ROOM
          </h3>
          <h2 className="font-semibold text-[40px] text-black">
            Présentation des rooms de discussion
          </h2>
        </div>
        <div className="w-full">
          <div className="flex flex-col items-center lg:items-start lg:flex-row justify-center w-full gap-3 lg:gap-0">
            <div className="flex flex-col w-1/2 lg:w-[21%] items-center lg:items-start gap-3">
              <h3 className="font-medium sm:text-xl md:text-2xl lg:text-3xl cursor-pointer">
                Discussions dans les rooms
              </h3>
              <span className="w-full h-1 flex bg-[#C4C4C4]"></span>
            </div>
            <div className="flex flex-col w-1/2 lg:w-[21%] items-center lg:items-end gap-3">
              <h3 className="font-medium sm:text-xl md:text-2xl lg:text-3xl cursor-pointer">
                Visionnage d’une rooms
              </h3>
              <span className="w-full h-1 flex bg-[#C4C4C4]"></span>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center">
            <div>
              <img src={Images.InRoomTalk} alt="" className="mt-20 lg:ml-24" />
            </div>
            <div className="w-4/5 lg:w-[672px] h-[446px] border border-[#52525B80] rounded-2xl lg:ml-24 flex items-center flex-col lg:items-start">
              <p className="text-[#777777] text-sm lg:text-[17px] font-semibold mx-10 lg:mx-20 my-10 text-start">
                <span className="text-[#444444]">Une open room</span> est une
                room dans laquelle une discussion à lieu avec un nombre
                d’utilisateurs définis pouvant interagir et le reste des
                utilisateurs non inscrit peuvent quant à eux assister à
                l'échange sans écrire et cette fois sans limite.
              </p>
              <p className="text-[#777777] text-sm lg:text-[17px] font-semibold mx-10 lg:mx-20 my-10 text-start">
                <span className="text-[#444444]">Une private room</span> est une
                room privé lancé par un utilisateur et ses abonnées. Seuls ces
                derniers y ont accès. Le but, créer des espaces d’échanges entre
                amis sur des thèmes et créneaux choisis.
              </p>
              <CustomButton
                text="Je m'inscris"
                customStyles="bg-[#211BBF] w-[205px] h-[64px] text-white text-xl flex-start flex items-center justify-center lg:ml-20"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#F5F5F5]">
        <div className="flex flex-col items-center py-20">
          <h3 className="text-[#4343EF] font-semibold text-[19px]">
            Avatar YDENN
          </h3>
          <h2 className="text-[#24242E] text-[29px] font-bold">
            Créer votre propre avatar
          </h2>
        </div>
        <div className="w-full flex flex-col sm:flex-row">
          <AvatarCard
            imageLink={Images.Curieux}
            name="Le curieux"
            description=""
            customStyles="bg-[#B7CAD8]"
          />
          <AvatarCard
            imageLink={Images.Initiateur}
            name="L'initiateur"
            description="Lorem"
            customStyles="bg-[#F0F0F0]"
          />
          <AvatarCard
            imageLink={Images.Discret}
            name="Le discret"
            description="Lorem"
            customStyles="bg-[#211BB080]"
          />
          <AvatarCard
            imageLink={Images.Mediateur}
            name="Le médiateur"
            description="Lorem"
            customStyles="bg-[#B8C8FF]"
          />
        </div>
        <div className="flex justify-center py-20 pb-40">
          <CustomButton
            text="Je commence le test"
            customStyles="bg-[#211BBF] w-[301px] h-[64px] text-white text-xl flex items-center justify-center"
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
          className="flex flex-col items-center gap-5 py-20 bg-[#FFFFFF] w-4/5 rounded-2xl"
        >
          <div className="w-full lg:w-1/3 ml-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[36px] font-semibold text-[#101828]">
              Inscrivez vous
            </h2>
            <h4 className="font-medium text-[#565C69] text-sm sm:text-base md:text-lg lg:text-xl my-5 w-full">
              Soyez le premier prévenu lors du lancement de l’application
            </h4>
          </div>
          <div className="flex flex-col md:flex-row gap-8 w-4/5 md:w-auto">
            <label className="font-medium text-sm text-[#344054] flex flex-col gap-2">
              Prénom
              <input
                className="border border-[#D0D5DD] md:w-[224px] h-[48px] rounded-lg text-[#667085] pl-3"
                type="text"
                name="firstname"
                id="firstname"
                placeholder="Prénom"
                required
              />
            </label>
            <label className="font-medium text-sm text-[#344054] flex flex-col gap-2">
              Nom
              <input
                className="border border-[#D0D5DD] md:w-[224px] h-[48px] rounded-lg text-[#667085] pl-3"
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Nom"
                required
              />
            </label>
          </div>
          <label className="font-medium text-sm text-[#344054] flex flex-col gap-2 w-4/5 md:w-auto">
            Email
            <input
              className="w-full md:w-[480px] h-[48px] rounded-lg border border-[#D0D5DD] text-[#667085] pl-3"
              type="email"
              name="email"
              id="email"
              placeholder="you@company.com"
              required
            />
          </label>
          <label className="font-medium text-sm text-[#344054] flex flex-col gap-2 w-4/5 md:w-auto">
            Message
            <textarea
              name="message"
              id="message"
              className="border border-[#D0D5DD] w-full md:w-[480px] h-[128px] rounded-lg resize-none"
            ></textarea>
          </label>
          <label className="font-normal text-base text-[#667085] w-full lg:w-1/3 ml-7">
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
            className="w-4/5 md:w-[480px] h-12 rounded-lg bg-black text-white"
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
