import React, { useContext, useState } from "react";
import { AppContext } from "../../context";
import { useNavigate } from "react-router-dom";
import Analytics from "../../assets/images/analytics.svg";
import DashCards from "../../assets/images/dash-cards.svg";
import Earth from "../../assets/images/earth.svg";
import Monitoring from "../../assets/images/monitoring.svg";
import Bell from "../../assets/images/bell.svg";

const Sidebar = () => {
  const { appState, setAppState } = useContext(AppContext);
  const navigate = useNavigate();

  const menuItems = [
    "Dashboard",
    "Analytics",
    "Connect",
    "Dealroom",
    "Profile",
    "Settings",
  ];

  const menuItemsMobile = [
    { image: DashCards, text: "Dashboard" },
    { image: Analytics, text: "Analytics" },
    { image: Earth, text: "Connect" },
    { image: Bell, text: "Activity" },
    { image: Monitoring, text: "Dealroom" },
  ];

  const handleSideMenuChange = (item) => {
    setAppState((prev) => ({ ...prev, currentPage: item }));
    navigate(item === "Profile" ? `/profile` : `/`);
  };

  return (
    <>
      <div className="hidden md:block">
        <div className="h-screen w-60 bg-black text-white p-4 pt-[13px] pl-[21px] flex flex-col">
          <div className="font-[700] text-[18px]">Vertxlabs, Inc</div>
          <ul className="space-y-4 mt-8">
            {menuItems.map((item) => (
              <li
                key={item}
                className={`cursor-pointer ${
                  appState?.currentPage === item
                    ? "text-white font-semibold"
                    : "text-[#555555] hover:text-white"
                } font-[700] text-[16px]`}
                onClick={() => handleSideMenuChange(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="block md:hidden">
      <div className="fixed bottom-0 flex bg-black w-full items-center pt-[13px] px-[15px] pb-[10px]">
        {menuItemsMobile?.map((i) => {
          return (
            <div className="flex flex-col justify-center items-center text-white w-[20%]">
              <img src={i?.image} alt="" className="mb-[2px]"/>
              <span className="text-[8px] font-[600]">{i?.text}</span>
            </div>
          );
        })}
      </div>
      </div>
    </>
  );
};

export default Sidebar;
