interface Props {
  imageLink: string;
  name: string;
  description: string;
  customStyles?: string;
}

function avatarCard({ imageLink, name, description, customStyles }: Props) {
  return (
    <div
      className={`${customStyles} h-[336px] w-[280px] relative flex items-center justify-around flex-col bg-white rounded-lg p-4`}
    >
      <img
        src={imageLink}
        alt={"image" + name}
        className="w-[190px] md:h-[168px] md:w-[168px]"
      />
      <div className="text-center">
        <h3 className="font-medium text-lg text-[#111111] font-inter my-4">
          {name}
        </h3>
        <p className="font-light text-xs">{description}</p>
      </div>
    </div>
  );
}

export default avatarCard;
