import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { useNavigate, useParams } from "react-router";
import { IndiaMap } from "../Components";
import { ApexOptions } from "apexcharts";
import DropdownCaste from "../Components/Dropdown";
import DropDownState from "../Components/DropDownStates";
import { StatesXcolor } from "../constants";
import { ExploreC, SideBar } from "../layouts";

function Standard() {
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
        name: "Inflation",
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

  // var chart = new ApexCharts(document.querySelector("#chart"), options);
  // chart.render();

  return (
    <div className='flex h-screen  items-center bg-bgr'>
      <ExploreC Explore={Explore} setExplore={setExplore} />
      <SideBar setExplore={setExplore} Explore={Explore} />
      <div className='w-full text-white  h-screen overflow-y-auto overflow-x-hidden p-9'>
        <div className='w-full flex justify-center font-mono text-3xl text-slate-300 font-bold py-5'>
          Primary Education
        </div>
        <div className='p-5  pl-20 space-x-4'>
          <DropdownCaste />
          <DropDownState />
        </div>
        <div className='w-full '>
          <div className=' flex justify-between'>
            <div className='w-5/12 h-3/5 my-10 sm:ml-20'>
              <IndiaMap
                hide={true}
                ChangeState={ChangeState}
                onLocationClick={onLocationClick}
              />
            </div>
            <div className=' w-1/2 justify-center text-purple-800  rounded-xl pt-5 space-y-5'>
              <div className=' flex justify-center text-purple-800 bg-bgr2 h-90 rounded-xl py-7'>
                <ReactApexChart
                  options={DROPoptions.options as ApexOptions}
                  series={DROPoptions.series}
                  type='line'
                  height={300}
                  width={600}
                />
              </div>
              <div className='flex justify-center text-purple-800 rounded-xl pt-7 bg-bgr2 h-90 py-5'>
                <ReactApexChart
                  options={Enrolloptions.options as ApexOptions}
                  series={Enrolloptions.series}
                  type='bar'
                  height={300}
                  width={600}
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
   * Dropout - Comp https://apexcharts.com/javascript-chart-demos/mixed-charts/line-column-area/
   * GPI = Line https://apexcharts.com/javascript-chart-demos/line-charts/gradient/
   * Liter = https://apexcharts.com/javascript-chart-demos/line-charts/syncing-charts/
   * Enroll = bar [https://apexcharts.com/javascript-chart-demos/column-charts/column-with-data-labels/]
   * Fail + Out turn = LINE [https://apexcharts.com/javascript-chart-demos/line-charts/data-labels/]
   */
}

// https://www.infragistics.com/products/ignite-ui-react/react/components/charts/types/column-chart
