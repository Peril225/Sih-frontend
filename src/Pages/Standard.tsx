import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { useNavigate, useParams } from "react-router";
import { IndiaMap } from "../Components";
import { ApexOptions } from "apexcharts";
import DropdownCaste from "../Components/Dropdown";
import DropDownState from "../Components/DropDownStates";
import { StatesXcolor } from "../constants";
import { ExploreC, SideBar } from "../layouts";

import NavBAR from "../layouts/navbar";

function Standard() {
  const [view, setview] = useState(false)
  const [open, setopen] = useState<boolean>(false)
  const [Current, setCurrent] = useState("Odissa");
  const [Explore, setExplore] = useState(false);
  const history = useNavigate();
  const { level } = useParams();
  const [DROPOUTBAR, setDROPOUTBAR] = useState();
  const ChangeState = (State: string) => {
    if (Current == State) {
      return;
    }
    setCurrent(State);
  };

  useEffect(() => {
    switch (level) {
      case "primary":
        break;
      case "secondary":
        break;
      case "technical":
        break;
      default:
        history("/404");
        break;
    }
    StatesXcolor.map((state) => {
      document.getElementById(
        state.State
      )!.style.fill = `rgba(137, 207, 240, 0.5)`;
    });
    document.getElementById("or")!.style.fill = `rgba(137, 207, 240, 1)`;
  }, []);

  const onLocationClick = (event: any) => {
    // console.log();
    StatesXcolor.map((state) => {
      document.getElementById(
        state.State
      )!.style.fill = `rgba(137, 207, 240, 0.5)`;
    });
    document.getElementById(
      event.target.id
    )!.style.fill = `rgba(137, 207, 240, 1)`;
  };

  const DROPoptions = {
    series: [
      {
        name: "Total",
        type: "column",
        data: [
          11, 11, 9, 12, 10, 10, 10, 9, 9, 10, 6, 8, 5, 9, 6, 7, 6, 3, 7, 7, 6,
          4,
        ],
      },
      {
        name: "Boys",
        type: "area",
        data: [
          9, 12, 12, 12, 11, 7, 11, 8, 7, 6, 7, 5, 8, 7, 4, 5, 8, 5, 3, 6, 5, 5,
        ],
      },
      {
        name: "Girls",
        type: "line",
        data: [
          10, 11, 10, 12, 10, 8, 10, 8, 8, 8, 6, 6, 6, 8, 5, 6, 7, 4, 5, 6, 5,
          4,
        ],
      },
    ],
    options: {
      title: {
        text: `DropOut Rate ${Current}`,
        style: {
          fontSize: "14px",
          fontWeight: "bold",
          fontFamily: undefined,
          color: "white",
        },
      },
      // colors : []
      chart: {
        width: 600,
        // height: 150,
        // type: "line",
        // stacked: false,
      },
      stroke: {
        width: [0, 1, 5],
        curve: "smooth",
      },
      plotOptions: {
        bar: {
          columnWidth: "70%",
        },
      },

      fill: {
        opacity: [0.85, 0.25, 1],
        gradient: {
          inverseColors: false,
          shade: "light",
          type: "vertical",
          opacityFrom: 0.85,
          opacityTo: 0.55,
          stops: [0, 100, 100, 100],
        },
      },
      labels: [
        "2001",
        "2002",
        "2003",
        "2004",
        "2005",
        "2006",
        "2007",
        "2008",
        "2009",
        "2010",
        "2011",
        "2012",
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
        "2019",
        "2020",
        "2021",
        "2022",
      ],
      markers: {
        size: 2,
      },
      xaxis: {
        type: "datetime",
        style: {
          colors: "white",
        },
        labels: {
          style: {
            colors: "white",
          },
        },
      },
      yaxis: {
        title: {
          text: "Points",
        },
        labels: {
          style: {
            colors: "white",
          },
        },
        min: 0,
      },
      tooltip: {
        // shared: true,
        // intersect: false,
        y: {
          formatter: function (y: any) {
            if (typeof y !== "undefined") {
              return y.toFixed(0) + " points";
            }
            return y;
          },
        },
      },
    },
  };

  const Enrolloptions = {
    series: [
      {
        name: "Index",
        data: [
          67, 85, 86, 77, 80, 70, 82, 75, 86, 73, 89, 77, 81, 84, 89, 78, 91,
          92, 83, 75, 89, 92,
        ],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "bar",
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: {
            position: "top", // top, center, bottom
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val: any) {
          return val + "%";
        },
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#83929c"],
        },
      },

      xaxis: {
        categories: [
          "2001",
          "2002",
          "2003",
          "2004",
          "2005",
          "2006",
          "2007",
          "2008",
          "2009",
          "2010",
          "2011",
          "2012",
          "2013",
          "2014",
          "2015",
          "2016",
          "2017",
          "2018",
          "2019",
          "2020",
          "2021",
          "2022",
        ],
        labels: {
          style: {
            colors: "white",
          },
        },
        position: "top",
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          fill: {
            type: "gradient",
            gradient: {
              colorFrom: "#D8E3F0",
              colorTo: "#BED1E6",
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            },
          },
        },
        tooltip: {
          enabled: true,
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val: any) {
            return val + "%";
          },
        },
      },
      title: {
        text: `Enrollment Rate in ${Current}`,
        style: {
          fontSize: "14px",
          fontWeight: "bold",
          fontFamily: undefined,
          color: "white",
        },
      },
    },
  };

  const LiteracyRate = {
    series: [
      {
        name: "BOYS",
        data: [79, 88, 78, 89, 88, 91, 83, 94, 85, 86, 86, 86, 94, 85, 90],
      },
      {
        name: "GIRLS",
        data: [80, 71, 67, 61, 67, 83, 62, 63, 83, 71, 78, 70, 81, 76, 88],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
        stackType: "100%",
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0,
            },
          },
        },
      ],
      xaxis: {
        labels: {
          style: {
            colors: "white",
          },
        },
        categories: [
          "2009",
          "2010",
          "2011",
          "2012",
          "2013",
          "2014",
          "2015",
          "2016",
          "2017",
          "2018",
          "2019",
          "2020",
          "2021",
          "2022",
        ],
      },
      fill: {
        opacity: 1,
      },
      legend: {
        labels: {
          colors: "white",
        },
        position: "bottom",
        offsetX: -10,
        offsetY: 0,
      },
      yaxis: {
        labels: {
          style: {
            colors: "white",
          },
        },
      },
    },
  };

  const PassFail = {
    series: [
      {
        name: "High - 2013",
        data: [80, 77, 85, 93, 89, 96, 92, 89, 88, 87, 95, 86, 88, 89, 91, 88],
      },
      {
        name: "Low - 2013",
        data: [88, 90, 78, 88, 94, 94, 78, 92, 91, 82, 88, 80, 88, 81, 90, 86],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        dropShadow: {
          enabled: true,
          color: "#000",
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ["#77B6EA", "#545454"],
      dataLabels: {
        enabled: true,
      },
      stroke: {
        curve: "smooth",
      },
      title: {
        text: `PassFail Stats ${Current}`,
        align: "left",
      },
      grid: {
        borderColor: "#e7e7e7",
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      markers: {
        size: 1,
      },
      xaxis: {
        categories: [
          "2001",
          "2002",
          "2003",
          "2004",
          "2005",
          "2006",
          "2007",
          "2008",
          "2009",
          "2010",
          "2011",
          "2012",
          "2013",
          "2014",
          "2015",
          "2016",
          "2017",
          "2018",
          "2019",
          "2020",
          "2021",
          "2022",
        ],
        title: {
          text: "Month",
        },
      },
      yaxis: {
        title: {
          text: "Temperature",
        },
        min: 60,
        max: 100,
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY: -25,
        offsetX: -5,
      },
    },
  };

  // var chart = new ApexCharts(document.querySelector("#chart"), options);
  // chart.render();

  return (
    <div className='md:flex h-screen  items-center bg-bgr'>
      <ExploreC Explore={Explore} setExplore={setExplore} />
      <SideBar setExplore={setExplore} Explore={Explore} />
      <NavBAR open={open} setExplore={setExplore} setopen={setopen} setview={setview} view={view} />
      <div className='w-full text-white  h-screen overflow-y-auto overflow-x-hidden p-9'>
        <div className='w-full flex justify-center font-mono text-3xl text-slate-300 font-bold py-5 capitalize'>
          {level} Education
        </div>
        <div className='p-5  md:pl-20 flex justify-center items-center h-auto space-x-5 md:space-x-4'>
          <DropdownCaste />
          <DropDownState />
        </div>
        <div className='w-full '>
          <div className=' xl:flex-row flex-col items-center flex xl:justify-between'>
            <div className='lg:w-5/12 lg:h-3/5 w-11/12 h-4/5 my-10 sm:ml-20 space-y-20'>
              <IndiaMap
                hide={true}
                ChangeState={ChangeState}
                onLocationClick={onLocationClick}
              />
              <div>
                <div
                  className='text-white xl:flex hidden   my-5   flex-col h-300   backdrop-blur-xl shadow-white letsSEE items-center space-y-6'
                  style={{ backdropFilter: "20px" }}
                >
                  <div className='py-3  text-3xl w-full flex justify-start px-4 border-b border-slate-400'>
                    Initiatives By Govt of India
                  </div>
                  {/* <div className='pt-3 inline-block'>Country Stats</div> */}
                  <div className='px-7 '>
                    &nbsp;With the formulation of National Policy on Education, India initiated a wide range of programmes for achieving the goal of UEE through several schematic and Programme interventions, such as<br/>
                    1.Sarva Shiksha Abhiyan<br/>
                    2.Mid Day Meal<br/>
                    3.Mahila Samakhya<br/>
                    4.Strengthening for providing quality Education in Madrassas ( SPQEM)<br/>
                    5.Sarva Shiksha Abhiyan (SSA) is implemented as India's main Programme for universalizing elementary education. <br/>
                    Its overall goals include universal access and retention, bridging of gender and social category gaps in education and enhancement of learning levels of children.
                    The National Council for Educational Research and Training (NCERT) promotes educational development both in quantitative and qualitative terms and makes special <br/>
                    efforts to remove disparities and equalize educational opportunities for all students. NCERT acknowledges and appreciates educational brilliance in students through the National Talent Search Scheme. <br/>
                    The Central Government provides grants to UGC and establishes Central Universities in the country. ,<br />
                    Meritorious students, from families with or without necessary means, need an incentive or encouragement to keep on working hard in their studies and go to the next level of education in their academic career
                    It also seeks to applaud artistic distinction through the Chacha Nehru Scholarships - for artistic and innovative excellence. The National Bal Bhawan has instituted a system of honouring talented children in different age groups in the year 1995 through the Bal Shree scheme.<br/>
                    6.National Merit-cum-Means Scholarship Scheme,<br />
                    7.Scheme for construction and running of Girls’ Hostel for students of secondary and higher secondary schools,<br />
                    8.Scholarship schemes for Minority students,<br />
                    9.National Scholarships


                    
                  </div>
                </div>
              </div>
            </div>
            <div className=' xl:w-1/2  justify-center text-purple-800  rounded-xl pt-5 space-y-5'>
              <div className=' flex justify-center text-purple-800 bg-bgr2 h-90 rounded-xl py-7'>
                <ReactApexChart
                  options={DROPoptions.options as ApexOptions}
                  series={DROPoptions.series}
                  type='line'
                  height={window.innerWidth > 420 ? 300 : 200}
                  width={window.innerWidth > 420 ? 600 : 400}
                />
              </div>
              <div className='flex justify-center text-purple-800 rounded-xl pt-7 bg-bgr2 h-96 py-5'>
                <ReactApexChart
                  options={Enrolloptions.options as ApexOptions}
                  series={Enrolloptions.series}
                  type='bar'
                  height={window.innerWidth > 420 ? 300 : 200}
                  width={window.innerWidth > 420 ? 600 : 400}
                />
              </div>
              <div className='flex justify-center text-purple-800 rounded-xl pt-7 bg-bgr2 h-96 py-5'>
                <ReactApexChart
                  options={LiteracyRate.options as ApexOptions}
                  series={LiteracyRate.series}
                  type='bar'
                  height={window.innerWidth > 420 ? 300 : 200}
                  width={window.innerWidth > 420 ? 600 : 400}
                />
              </div>
              <div className='flex justify-center text-purple-800 rounded-xl pt-7 bg-slate-200 h-96 py-5'>
                <ReactApexChart
                  options={PassFail.options as ApexOptions}
                  series={PassFail.series}
                  type='line'
                  height={window.innerWidth > 420 ? 300 : 200}
                  width={window.innerWidth > 420 ? 600 : 400}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Standard;

// notes [Line , bar  , biBar , Compound ]
{
  /**
   * Dropout - Comp https://apexcharts.com/javascript-chart-demos/mixed-charts/line-column-area/ -----
   * GPI = Line https://apexcharts.com/javascript-chart-demos/line-charts/gradient/
   * Liter = https://apexcharts.com/javascript-chart-demos/line-charts/syncing-charts/
   * Enroll = bar [https://apexcharts.com/javascript-chart-demos/column-charts/column-with-data-labels/] -----
   * Fail + Out turn = LINE [https://apexcharts.com/javascript-chart-demos/line-charts/data-labels/]
   */
}

// https://www.infragistics.com/products/ignite-ui-react/react/components/charts/types/column-chart
