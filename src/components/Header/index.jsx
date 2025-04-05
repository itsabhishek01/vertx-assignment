import React, { useContext, useState, useEffect, useRef } from "react";
import { AppContext } from "../../context";
import ThreeDot from "../../assets/images/three-dot.svg";
import Logo from "../../assets/images/logo-transparent.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { appState } = useContext(AppContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const menuRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
          <div className="relative" ref={menuRef}>
            <img
              src={ThreeDot}
              alt="three-dot-menu"
              className="cursor-pointer"
              onClick={toggleMenu}
            />

            {/* Dropdown Menu */}
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-[120px] bg-black text-white rounded-md shadow-lg border border-white z-50 select-none">
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
