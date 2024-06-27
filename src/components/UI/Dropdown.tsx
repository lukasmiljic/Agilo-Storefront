import { GoChevronDown, GoChevronUp, GoCheck } from "react-icons/go";
import { useState } from "react";

const Dropdown = ({
  title = "Sample title",
  list = ["item1", "item2", "item3"], }: {
  title: string;
  list: string[];
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleClickOutside = () => {
    setIsOpen(false);
  };
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleSelect = (index: number) => {
    setIsOpen(false);
    setSelectedIndex(index);
  };

  return (
    <>
      <div>
        {isOpen && (
          <div
            className="fixed top-0 left-0 w-full h-full z-10"
            onClick={() => handleClickOutside()}></div>
        )}
      </div>
      <div
        className="flex relative flex-col items-center justify-center border border-tertiary bg-transparent w-full text-xs cursor-pointer"
        onClick={() => toggleDropdown()}>
        <div className="flex items-center justify-between w-full m-4 pl-4 pr-4">
          <p className="">
            {selectedIndex === -1 ? title : list[selectedIndex]}
          </p>
          {isOpen ? <GoChevronUp /> : <GoChevronDown />}
        </div>
        {isOpen && (
          <div className="absolute top-full left-0 bg-white w-full border border-tertiary z-10">
            {list.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center justify-between w-full p-4 cursor-pointer hover:bg-gray-50"
                  onClick={() => handleSelect(index)}>
                  <p
                    className={`${selectedIndex === index ? "font-bold" : ""}`}>
                    {item}
                  </p>
                  {selectedIndex === index && <GoCheck />}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Dropdown;
