interface Props {
  text: string;
  redirectUrl: string;
  customStyles?: string;
}

function CustomButton({ text, customStyles, redirectUrl }: Props) {
  return (
    <a
      href={redirectUrl}
      className={`h-[50px] flex items-center justify-center text-xs md:text-sm ${customStyles} font-inter`}
    >
      {text}
    </a>
  );
}

export default CustomButton;
