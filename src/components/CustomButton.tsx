interface Props {
  text: string;
  customStyles?: string;
}

function CustomButton({ text, customStyles }: Props) {
  return (
    <button className={`h-[50px] font-bold text-xs md:text-sm ${customStyles}`}>
      {text}
    </button>
  );
}

export default CustomButton;
