import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { IndiaMap } from "../Components";
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
  const onLocationClick = (event: any) => {};
  var options = {
    series: [
      {
        name: "TEAM A",
        type: "column",
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
      },
      {
        name: "TEAM B",
        type: "area",
        data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
      },
      {
        name: "TEAM C",
        type: "line",
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
      },
    ],
    chart: {
      height: 350,
      type: "line",
      stacked: false,
    },
    stroke: {
      width: [0, 2, 5],
      curve: "smooth",
    },
    plotOptions: {
      bar: {
        columnWidth: "50%",
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
      "01/01/2003",
      "02/01/2003",
      "03/01/2003",
      "04/01/2003",
      "05/01/2003",
      "06/01/2003",
      "07/01/2003",
      "08/01/2003",
      "09/01/2003",
      "10/01/2003",
      "11/01/2003",
    ],
    markers: {
      size: 0,
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      title: {
        text: "Points",
      },
      min: 0,
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y: any) {
          if (typeof y !== "undefined") {
            return y.toFixed(0) + " points";
          }
          return y;
        },
      },
    },
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();

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
            <div className='w-4/12 h-2/5 my-10 sm:ml-20'>
              <IndiaMap
                hide={true}
                ChangeState={ChangeState}
                onLocationClick={onLocationClick}
              />
            </div>
            <div className='w-1/2 flex justify-center'>
              <div id='chart'></div>
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
