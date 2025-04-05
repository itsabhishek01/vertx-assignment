import React, { useState } from "react";
import Layout from "../../components/Layout";
import DP from "../../assets/images/person_24dp_1F1F1F_FILL1_wght400_GRAD0_opsz24 1.svg";
import smallLogo from "../../assets/images/small_logo.svg";
import Linkedin from "../../assets/images/linkedin.svg";
import X from "../../assets/images/twitter.svg";
import Gmail from "../../assets/images/gmail.svg";
import Logo from "../../assets/images/logo_only.svg";
import Verified from "../../assets/images/verified_badge.svg";

const foundedCompanies = [
  {
    name: "Vertx",
    role: "CEO",
    foundedYear: "2025",
    industry: "Fintech",
    roleColor: "#579560",
    logo: Logo,
  },
  {
    name: "Company 1",
    role: "PROPRIETOR",
    details: "Details/Information like acquired/exit/M&A",
    roleColor: "#B1BDEB",
    logo: null,
  },
];

const experiences = [
  { name: "Company 1" },
  { name: "Company 2" },
  { name: "Company 3" },
];

const navItems = ["Overview", "Portfolio", "Experience", "Media"];

const Profile = () => {
  const [activeTab, setActiveTab] = useState("Overview");
  return (
    <Layout>
      <div className="w-full text-white">
        {/* Header */}
        <div className="flex justify-between items-center px-[30px] py-[12px] font-[600] pt-[47px] md:pt-[20px] md:static md:top-0  sticky top-[51px] bg-black z-40">
          <div className="flex md:max-w-none w-full justify-between md:justify-normal md:gap-[40px]">
            {navItems.map((item, index) => (
              <div
                key={index}
                className={`ml-[${index === 0 ? "0" : "29px"}] ${
                  item === activeTab
                    ? "border-b border-[#fff] md:border-none"
                    : "text-[#555555]"
                } cursor-pointer text-[12px] md:text-[16px]`}
                onClick={() => setActiveTab(item)}
              >
                {item}
              </div>
            ))}
          </div>
          <div className="hidden md:block">More</div>
        </div>
        {/* Profile Overview */}
        <div className="px-[26px] py-[17px] md:px-[58px] md:py-[31px]">
          <div className="md:text-[28px] text-[20px] font-[800]">
            {activeTab}
          </div>

          {activeTab === "Overview" ? (
            <div className="flex flex-col mt-[24.81px]">
              {/* Profile Card */}
              <div className="flex-col md:flex-row flex items-start md:items-center border border-[#272727] rounded-[10px] p-5 md:px-[44.67px] md:py-[28.13px]">
                <div className="ml-[-20px] md:ml-0">
                  <img src={DP} alt="Profile" />
                </div>
                <div className="flex md:block md:ml-[33px] w-full justify-between md:justify-normal">
                  <div className="flex">
                    <div>
                      <div className="text-[24px] font-[700]">Mr A</div>
                      <div className="flex items-center mt-[2.25px]">
                        <span className="mr-1 text-[12px] md:text-[16px]">
                          {" "}
                          Co-Founder & CEO @Vertx
                        </span>
                        <img src={smallLogo} alt="Company Logo" />
                      </div>
                      <div className="bg-white text-black font-[500] text-[8px] px-[4.39px] py-[2.98px] rounded-[2px] w-[62.4px] my-[8.12px] md:mt-[13.12px]">
                        Entrepreneur
                      </div>
                    </div>
                    <div>
                      <img src={Verified} alt="" />
                    </div>
                  </div>
                  <div className="flex md:mt-[32.11px] gap-[8.19px] items-end md:items-normal">
                    <img
                      src={Linkedin}
                      alt="LinkedIn"
                      className="w-[20px] h-[20px] md:w-[31.3px] md:h-[31.3px]"
                    />
                    <img
                      src={X}
                      alt="Twitter"
                      className="w-[20px] h-[20px] md:w-[31.3px] md:h-[31.3px]"
                    />
                    <img
                      src={Gmail}
                      alt="Gmail"
                      className="w-[20px] h-[20px] md:w-[31.3px] md:h-[31.3px]"
                    />
                  </div>
                </div>
              </div>

              {/* Founded Companies & Experience */}
              <div className="flex-col md:flex-row flex justify-between md:py-[17.86px] md:px-0 p-5">
                {/* Founded Companies Section */}
                <div className="w-full md:w-[48%]">
                  <div className="font-[800] text-[18px]">
                    Founded Companies
                  </div>
                  <div className="text-[64px] font-[700]">
                    {foundedCompanies.length.toString().padStart(2, "0")}
                  </div>

                  {foundedCompanies.map((company, index) => (
                    <div className="flex items-center mt-[22.19px]" key={index}>
                      <div className="mr-[3.97px] bg-white w-[32.91px] h-[29.77px] flex justify-center items-center rounded-[2px]">
                        {company.logo && (
                          <img src={company.logo} alt={company.name} />
                        )}
                      </div>
                      <div className="flex items-start justify-between w-full">
                        <div>
                          <div className="text-[14px] font-[700] flex items-center">
                            <span>{company.name}</span>
                            <div
                              className={`bg-[${company.roleColor}] text-black font-[500] text-[8px] px-[4.39px] py-[2.98px] rounded-[2px] ml-[8.78px]`}
                            >
                              {company.role}
                            </div>
                          </div>
                          {company.foundedYear && (
                            <div className="text-[10px]">
                              Founded in {company.foundedYear} in{" "}
                              <span className="font-[600]">
                                {company.industry}.
                              </span>
                            </div>
                          )}
                          {company.details && (
                            <div className="text-[10px]">{company.details}</div>
                          )}
                        </div>
                        <div className="font-[500] text-[8px]">
                          View Profile
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Experience Section */}
                <div className="w-full mt-[36px] md:mt-0 md:w-[48%]">
                  <div className="font-[800] text-[18px]">Experience</div>
                  <div className="text-[64px] font-[700]">
                    {experiences.length.toString().padStart(2, "0")}
                  </div>

                  {experiences.map((experience, index) => (
                    <div className="flex items-center mt-[22.19px]" key={index}>
                      <div className="mr-[3.97px] bg-white w-[32.91px] h-[29.77px] flex justify-center items-center rounded-[2px]"></div>
                      <div className="flex items-start justify-between w-full">
                        <div>
                          <div className="text-[14px] font-[700] flex items-center">
                            <span>{experience.name}</span>
                          </div>
                        </div>
                        <div className="font-[500] text-[8px]">
                          View Profile
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center border border-[#272727] rounded-[10px] px-[44.67px] py-[28.13px] font-[700] text-[24px] md:text-[72px] h-[215.26px] justify-center  mt-[24.81px]">
              Coming Soon !
            </div>
          )}
        </div>
      </div>
      <div className="mb-[61px] md:mb-0"></div>
    </Layout>
  );
};

export default Profile;
