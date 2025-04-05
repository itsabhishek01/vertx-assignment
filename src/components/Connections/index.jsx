import React, { useState } from "react";
import Logo from "../../assets/images/logo.svg";

const Connections = () => {
  const [connections, setConnections] = useState([
    { name: "Abhishek", isOnline: true },
    { name: "Priya", isOnline: false },
    { name: "Rahul", isOnline: true },
    { name: "Neha", isOnline: false },
  ]);

  return (
    <div className="text-white py-2 px-[10px] hidden md:block">
      <img src={Logo} alt="" />
      {connections?.map((connection, index) => {
        const firstLetter = connection?.name?.charAt(0)?.toUpperCase();
        return (
          <div
            key={index}
            className="relative w-[30px] h-[30px] bg-white rounded-full text-black flex justify-center items-center text-[14px] mt-4"
          >
            {/* {firstLetter} */}
            <span
              className={`${
                connection?.isOnline ? "bg-[#01754F]" : "bg-[#8B3A08]"
              } w-[8px] h-[8px] rounded-full absolute top-[22px] right-0`}
            />
          </div>
        );
      })}
      <div></div>
    </div>
  );
};

export default Connections;
