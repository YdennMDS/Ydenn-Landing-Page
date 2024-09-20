// interface CustomInputProps {
//   text: string;
//   isSelected: boolean;
// }

// export default function CustomInput({ text, isSelected }: CustomInputProps) {
//   return (
//     <div
//       className={`flex flex-row items-center w-full max-w-[1070px] max-h-[73px] h-screen bg-white rounded-[20px] justify-between cursor-pointer p-4 transition-all duration-300 ${
//         isSelected
//           ? "border-2 border-[#211BB0] bg-blue-50"
//           : "border border-gray-300"
//       }`}
//     >
//       <p className="font-medium text-xl text-black ml-16">{text}</p>
//       <input
//         type="radio"
//         className="h-[25px] w-[25px] accent-[#211BB0]"
//         checked={isSelected}
//         readOnly
//       />
//     </div>
//   );
// }

interface CustomInputProps {
  text: string;
  isSelected: boolean;
  onSelect: () => void;
}

export default function CustomInput({
  text,
  isSelected,
  onSelect,
}: CustomInputProps) {
  return (
    <div
      className={`flex flex-row items-center w-full max-w-[1070px] max-h-[73px] h-screen bg-white rounded-[20px] justify-between cursor-pointer p-4 transition-all duration-300 ${
        isSelected
          ? "border-2 border-[#211BB0] bg-blue-50"
          : "border border-gray-300"
      }`}
      onClick={onSelect}
    >
      <p className="font-medium text-xl text-black ml-16">{text}</p>
      <input
        type="radio"
        className="h-[25px] w-[25px] accent-[#211BB0]"
        checked={isSelected}
        readOnly
      />
    </div>
  );
}
