interface Props {
  imageLink: string;
  name: string;
  customStyles?: string;
}

function avatarCard({ imageLink, name, customStyles }: Props) {
  return (
    <div
      className={`${customStyles} w-full sm:w-1/4 h-[424px] relative flex items-center justify-center`}
    >
      <img src={imageLink} alt="" className="absolute" />
      <div>
        <h3 className="font-medium sm:text-xl text-[40px] lg:text-[40px] text-[#111111] left-7 top-7 absolute font-inter">
          {name}
        </h3>
      </div>
      <div className="absolute top-0 right-0 border-t-[#111111] border-r-[#111111] border-l-transparent border-b-transparent border-[32px] rotate"></div>
    </div>
  );
}

export default avatarCard;
