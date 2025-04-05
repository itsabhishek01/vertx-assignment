import React, { useState } from "react";
import Layout from "../../components/Layout";
// import DottedMap, { createMap } from "dotted-map";
import WorldMap from "../../assets/images/world-map.png";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Dropdown from "../../components/Dropdown";
import { mapJsonString } from "../../map";
import IndiaFlag from "../../assets/images/Flag_of_India.svg.webp";
import USAFlag from "../../assets/images/Flag_of_the_United_States.svg.png";
import CanadaFlag from "../../assets/images/Flag_of_Canada.svg.png";
import UAEFlag from "../../assets/images/Flag_of_the_United_Arab_Emirates.svg.png";

const data = [
  { name: "Mar 1", visitors: 200, visitors2: 180 },
  { name: "Mar 5", visitors: 1600, visitors2: 1200 },
  { name: "Mar 10", visitors: 900, visitors2: 600 },
  { name: "Mar 15", visitors: 1300, visitors2: 1600 },
  { name: "Mar 20", visitors: 600, visitors2: 750 },
  { name: "Mar 22", visitors: 2000, visitors2: 1400 },
  { name: "Mar 23", visitors: 800, visitors2: 850 },
  { name: "Mar 24", visitors: 1700, visitors2: 1900 },
  { name: "Mar 25", visitors: 700, visitors2: 650 },
  { name: "Mar 26", visitors: 1500, visitors2: 1300 },
  { name: "Mar 27", visitors: 600, visitors2: 700 },
  { name: "Mar 28", visitors: 1400, visitors2: 1200 },
  { name: "Mar 29", visitors: 800, visitors2: 850 },
  { name: "Mar 30", visitors: 1800, visitors2: 1400 },
];

const yTicks = [200, 400, 800, 1200, 1600, 2000]; // Custom Y-axis ticks

const navItems = ["Overview", "Demographies"];

const DemographicData = [
  { country: "INDIA", flag: IndiaFlag, percentage: 40, color: "#4834D4" },
  { country: "USA", flag: USAFlag, percentage: 25, color: "#BD5302" },
  { country: "CANADA", flag: CanadaFlag, percentage: 10, color: "#E9C16B" },
  { country: "UAE", flag: UAEFlag, percentage: 7, color: "#579560" },
];

// Add pins for all countries
// const pins = [
//   { lat: 28.6139, lng: 77.2090, color: "#4834D4" },   // India
//   { lat: 40.73061, lng: -73.935242, color: "#BD5302" }, // USA
//   { lat: 43.65107, lng: -79.347015, color: "#E9C16B" }, // Canada
//   { lat: 25.276987, lng: 55.296249, color: "#579560" }, // UAE
// ];

const Analytics = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  // const map = new DottedMap({
  //   map: JSON.parse(mapJsonString),
  //   height: 500,
  //   width: 1400,
  // });

  // pins.forEach((pin) =>
  //   map.addPin({
  //     lat: pin.lat,
  //     lng: pin.lng,
  //     svgOptions: { color: pin.color, radius: 0.5 },
  //   })
  // );
  // const svgMap = map.getSVG({
  //   radius: 0.22,
  //   color: "#888888",
  //   shape: "circle",
  //   backgroundColor: "#020300",
  // });

  return (
    <Layout>
      <div className="w-full text-white">
        {/* Header */}
        <div className="flex justify-between items-center px-[30px] py-[12px] font-[600] pt-[47px] md:pt-[20px] md:static md:top-0  sticky top-[51px] bg-black z-40">
          <div className="flex md:max-w-none w-full justify-between md:justify-normal">
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
            <div className="flex flex-col">
              <div className="flex flex-col md:flex-row mt-[24.81px]">
                {/* Profile Card */}
                <div className="h-56 w-full md:w-[70%] border-[#1D1D1D] rounded-[8px]">
                  <div className="flex">
                    <Dropdown
                      label="Visitors"
                      options={[
                        "Visitors",
                        "Connections",
                        "Interactions",
                        "Impressions",
                      ]}
                    />
                    <Dropdown
                      label="Last 30 days"
                      options={[
                        "Today",
                        "Yesterday",
                        "This week",
                        "Last week",
                        "Last 7 days",
                        "Last 30 days",
                      ]}
                    />
                  </div>

                  <div className="flex mb-[36px]">
                    <div className="flex items-end gap-[22px]">
                      <div className="mt-[17px]">
                        <div className="text-[32px] font-[800]">13.49K</div>
                      </div>
                      <div className="flex flex-col mb-[6px]">
                        <div className="font-[600] text-[12px] text-[#01754F]">
                          +469%
                        </div>
                        <div className="font-[600] text-[12px] text-[#555555]">
                          (897)
                        </div>
                      </div>
                    </div>{" "}
                    <div className="flex items-end gap-[22px]">
                      <div className="mt-[17px]">
                        <div className="text-[32px] font-[800]">3.49K</div>
                      </div>
                      <div className="flex flex-col mb-[6px]">
                        <div className="font-[600] text-[12px] text-[#01754F]">
                          +180%
                        </div>
                        <div className="font-[600] text-[12px] text-[#555555]">
                          (497)
                        </div>
                      </div>
                    </div>
                  </div>

                  <ResponsiveContainer width="100%" height="85%">
                    <LineChart data={data} margin={{ left: 20, right: 20 }}>
                      <XAxis
                        dataKey="name"
                        stroke="#888"
                        tick={{ fill: "#888" }}
                        interval={1} // Show all labels
                        axisLine={false} // REMOVE X-AXIS LINE
                      />
                      <YAxis
                        tick={{ fill: "#888" }}
                        domain={[200, 2000]}
                        ticks={yTicks}
                        tickFormatter={(value) =>
                          value >= 1000 ? `${value / 1000}K` : value
                        }
                        axisLine={false} // REMOVE Y-AXIS LINE
                      />
                      <Tooltip />

                      {/* First Line - White */}
                      <Line
                        type="linear"
                        dataKey="visitors"
                        stroke="#fff"
                        strokeWidth={2}
                        dot={false}
                      />

                      {/* Second Line - Purple (#C36DEE) */}
                      <Line
                        type="linear"
                        dataKey="visitors2" // New dataset key
                        stroke="#C36DEE"
                        strokeWidth={2}
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                <div className="w-full md:w-[30%] flex md:flex-col ml-[32px] border border-[#1D1D1D] rounded-[8px]">
                  <div className="flex items-center justify-between w-full">
                    <div className="text-[20px] font-[700] w-[80%]">
                      Insights
                    </div>
                    <Dropdown
                      label="Visitors"
                      options={["Visitors", "Daily Active", "Monthly Active"]}
                    />
                  </div>
                  <div className="flex items-end gap-[22px]">
                    <div className="mt-[17px]">
                      <div className="font-[600] text-[16px]">Founders</div>
                      <div className="text-[32px] font-[800]">7.4K</div>
                    </div>
                    <div className="flex flex-col mb-[6px]">
                      <div className="font-[600] text-[12px] text-[#01754F]">
                        +000%
                      </div>
                      <div className="font-[600] text-[12px] text-[#555555]">
                        (000)
                      </div>
                    </div>
                  </div>

                  <div className="flex items-end gap-[22px]">
                    <div className="mt-[17px]">
                      <div className="font-[600] text-[16px]">Investors</div>
                      <div className="text-[32px] font-[800]">6.09K</div>
                    </div>
                    <div className="flex flex-col mb-[6px]">
                      <div className="font-[600] text-[12px] text-[#01754F]">
                        +000%
                      </div>
                      <div className="font-[600] text-[12px] text-[#555555]">
                        (000)
                      </div>
                    </div>
                  </div>

                  <div className="text-[10px] font-[600] flex justify-end mt-[90px]">
                    View detailed insights
                  </div>
                </div>
              </div>

              <div className="mt-[34px]">
                <div className="text-[20px] font-[700]">Demographics</div>

                <div className="flex">
                  <div className="w-[70%]">
                    {" "}
                    {/*                   <img
                        src={`data:image/svg+xml;utf8,${encodeURIComponent(
                          svgMap
                        )}`}
                        alt="Dotted Map"
                        style={{ height: "250px", width: "100%" }}
                        />*/}
                    <img src={WorldMap} alt="" />
                    <div className="flex justify-between w-[50%] border border-[#000000] py-[5px] px-[13px] rounded-[20px]">
                      {DemographicData?.map((i) => {
                        return (
                          <div className="flex items-center gap-1">
                            <div
                              style={{
                                background: i?.color,
                                height: "12px",
                                width: "12px",
                                borderRadius: "100%",
                              }}
                            />
                            <div>{i?.country}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="w-[30%] bg-black rounded-lg">
                    {DemographicData.map((c, index) => (
                      <div key={index} className="flex items-center mb-3">
                        {/* Flag */}
                        <img
                          src={c.flag}
                          alt={`${c.country} Flag`}
                          className="w-10 h-7 mr-3"
                        />

                        {/* Country & Percentage */}
                        <div className="flex flex-col w-full">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-white font-semibold">
                              {c.country}
                            </span>
                            <span className="text-gray-400 text-[10px]">
                              {c.percentage}%
                            </span>
                          </div>

                          {/* Progress Bar */}
                          <div className="w-full bg-gray-700 h-[8px] rounded-full">
                            <div
                              className="h-[8px] rounded-full"
                              style={{
                                width: `${c.percentage}%`,
                                backgroundColor: c.color,
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className="text-[10px] font-[600] flex justify-end mt-[90px]">
                      View all countries
                    </div>
                  </div>
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

export default Analytics;
