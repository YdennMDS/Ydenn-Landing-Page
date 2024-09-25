import React, { useState } from "react";

interface MobileRoomSelectorProps {
  onOptionChange: (option: boolean) => void;
}

const MobileRoomSelector: React.FC<MobileRoomSelectorProps> = ({
  onOptionChange,
}) => {
  const [selectedOption, setSelectedOption] = useState(
    "Discussions dans les rooms"
  );

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedOption(value);
    onOptionChange(value === "Visionnage d’une rooms");
  };

  return (
    <div className="flex w-full items-center justify-center sm:hidden">
      <select
        value={selectedOption}
        onChange={handleChange}
        className="flex w-[315px] p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-[#211BBF]"
      >
        <option value="Discussions dans les rooms">
          Discussions dans les rooms
        </option>
        <option value="Visionnage d’une rooms">Visionnage d’une rooms</option>
      </select>
    </div>
  );
};

export default MobileRoomSelector;
