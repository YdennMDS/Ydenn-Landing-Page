import Dot from "../assets/Dot.svg";
import Illustration1 from "../assets/Illustration1.svg";
import logo_ydenn from "../assets/LOGO-YDENN-NOIR 1.svg";
import Curieux from "../assets/curieux.svg";
import Discret from "../assets/discret.svg";
import InRoomTalk from "../assets/inRoomTalk.svg";
import Initiateur from "../assets/initiateur.svg";
import Mediateur from "../assets/mediateur.svg";
import SeenRoom from "../assets/seenRoom.svg";

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
};

export default images;
