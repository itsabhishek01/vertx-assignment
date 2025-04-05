import React, { useContext, useState } from "react";
import { AppContext } from "../../context";
import ThreeDot from "../../assets/images/three-dot.svg";
import Logo from "../../assets/images/logo-transparent.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { appState } = useContext(AppContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <>
      {/* Desktop Header */}
      <div className="hidden md:block">
        <div className="w-full bg-black text-white flex justify-between items-center py-[14px] px-[32px]">
          <div className="text-[16px] font-[600]">{appState?.currentPage}</div>
          <div className="flex gap-[60px]">
            <div className="text-[16px] font-[600] cursor-pointer hover:opacity-80">
              Activity
            </div>
            <div className="text-[16px] font-[600] cursor-pointer hover:opacity-80">
              Log out
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="block md:hidden sticky top-0 z-50 bg-black">
        <div className="w-full text-white flex justify-between items-center py-[10px] px-[10px] relative">
          <div className="w-[30px] h-[30px] bg-white rounded-full" />
          <img src={Logo} alt="logo" />
          <div className="relative">
            <img
              src={ThreeDot}
              alt="three-dot-menu"
              className="cursor-pointer"
              onClick={toggleMenu}
            />

            {/* Dropdown Menu */}
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-[120px] bg-black text-white rounded-md shadow-lg border border-white z-50">
                <div className="py-2 px-4 text-[16px] font-[600] cursor-pointer hover:opacity-80">
                  Activity
                </div>
                <div
                  className="py-2 px-4 text-[16px] font-[600] cursor-pointer hover:opacity-80"
                  onClick={() =>
                    navigate(
                      window?.location?.pathname === "/profile"
                        ? "/analytics"
                        : "/profile"
                    )
                  }
                >
                  {window?.location?.pathname === "/profile"
                    ? "Analytics"
                    : "Profile"}
                </div>
                <div className="py-2 px-4 text-[16px] font-[600] cursor-pointer hover:opacity-80">
                  Log out
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
