interface Props {
  imageLink: string;
  name: string;
  customStyles?: string;
}

function avatarCard({ imageLink, name, customStyles }: Props) {
  return (
    <div
      className={`${customStyles} w-1/2 lg:w-1/4 h-[232px] md:h-[424px] relative flex items-center justify-center`}
    >
      <img
        src={imageLink}
        alt={"image" + name}
        className="absolute w-[190px] md:h-[360px] md:w-[360px]"
      />
      <div>
        <h3 className="font-medium text-2xl md:text-[30px] lg:text-[40px] text-[#111111] left-7 top-2 sm:top-7 absolute font-inter">
          {name}
        </h3>
      </div>
      <div className="absolute top-0 right-0 border-t-[#111111] border-r-[#111111] border-l-transparent border-b-transparent border-[17px] md:border-[32px] rotate"></div>
    </div>
  );
}

export default avatarCard;
