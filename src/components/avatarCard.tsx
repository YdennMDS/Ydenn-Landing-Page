interface Props {
  imageLink: string;
  name: string;
  description: string;
  customStyles?: string;
}

function avatarCard({ imageLink, name, description, customStyles }: Props) {
  return (
    <div className={`${customStyles} w-full sm:w-1/4 h-[424px] relative`}>
      <img src={imageLink} alt="" className="absolute bottom-0 right-0" />
      <div>
        <h3 className="font-medium sm:text-xl text-[40px] lg:text-[40px] text-[#111111] ml-6 mt-6 relative">
          {name}
        </h3>
        <p className="ml-6 mt-24">{description}</p>
      </div>
      <div className="absolute top-0 right-0 border-t-[#111111] border-r-[#111111] border-l-transparent border-b-transparent border-[32px] rotate"></div>
    </div>
  );
}

export default avatarCard;
