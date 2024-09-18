import Dot from "../assets/Dot.png";
import Illustration1 from "../assets/Illustration1.png";
import logo_ydenn from "../assets/LOGO-YDENN-NOIR 1.svg";
import Curieux from "../assets/curieux.png";
import Discret from "../assets/discret.png";
import InRoomTalk from "../assets/inRoomTalk.png";
import Initiateur from "../assets/initiateur.png";
import ItemsList from "../assets/items_list.png";
import logo_footer from "../assets/logo_footer.png";
import YdennLogoFull from "../assets/logo_ydenn_noir_full.png";
import Mediateur from "../assets/mediateur.png";
import SeenRoom from "../assets/seenRoom.png";

interface Images {
  [key: string]: string;
  logo_ydenn: string;
  Illustration1: string;
  Dot: string;
  InRoomTalk: string;
  SeenRoom: string;
  Curieux: string;
  Initiateur: string;
  Discret: string;
  Mediateur: string;
  logo_footer: string;
  YdennLogoFull: string;
  ItemsList: string;
}

const images: Images = {
  logo_ydenn,
  Illustration1,
  Dot,
  InRoomTalk,
  SeenRoom,
  Curieux,
  Initiateur,
  Discret,
  Mediateur,
  logo_footer,
  YdennLogoFull,
  ItemsList,
};

export default images;
