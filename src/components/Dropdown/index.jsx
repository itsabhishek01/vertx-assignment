import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative min-w-[120px] z-30 bg-black">
      {/* Dropdown Button */}
      <div
        className="text-white flex items-center justify-between cursor-pointer p-2 rounded-md"
        onClick={toggleDropdown}
      >
        <div className="text-[12px] font-[600]">{selectedOption || label}</div>
        <div
          className={`w-0 h-0 border-l-[6px] border-r-[6px] border-b-[6px] border-l-transparent border-r-transparent border-b-white transition-transform ${
            isOpen ? "rotate-0" : "rotate-180"
          }`}
        ></div>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 mt-1 w-full rounded-md shadow-md text-white bg-black">
          {options.map((option, index) => (
            <div
              key={index}
              style={{
                color: selectedOption !== option ? "#555555" : "#fff",
              }}
              className="p-2 text-[10px] hover:bg-[#1D1D1D] cursor-pointer"
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
