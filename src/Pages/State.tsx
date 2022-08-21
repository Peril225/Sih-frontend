import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import "react-svg-map/lib/index.css";
import { useSelector } from "react-redux";
import DropDownyrs from "../Components/DropDownyrs";
import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import DropdownCaste from "../Components/Dropdown";
import Dropdownedu from "../Components/Dropdownedu";
// import Carousel from "../layouts/Carousel"


function State(){
  // go to page
    const [Explore, setExplore] = useState(false);
    const { states } = useParams();
    const history = useNavigate();
    useEffect(() => {
        switch (states) {
          case "Telangana":
            break;
          case "Odisha":
            break;
          case "Maharashtra":
            break;
          default:
            history("/404");
            break;
        }
    });
    // const ChangeState =() =>{}
    // const onLocationClick =() =>{}
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
          text: `Enrollment Rate in Kerala`,
          style: {
            fontSize: "14px",
            fontWeight: "bold",
            fontFamily: undefined,
            color: "white",
          },
        },
      },
    };
    
    return (
      <div className='flex w-screen items-center bg-bgr'>
      {/* <NavBar setExplore={setExplore} Explore={Explore} /> */}
      <div className='flex flex-wrap text-white'>
          {/* <div className='w-full flex justify-center font-mono text-3xl text-slate-300 font-bold py-5'>
                  TELANGANA
          </div> */}
      </div>
      <div className="container-fluid w-full flex flex-wrap items-center justify-between px-1 py-1 ">
      <nav className="flex items-center justify-between w-screen flex-wrap bg-white py-4 lg:px-12 shadow border-solid border-t-2 border-blue-00">
  <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
    <div className="flex items-center flex-shrink-0 text-gray-800 mr-16">
      <span className="font-semibold text-xl tracking-tight">Vriddhi</span>
    </div>
    <div className="block lg:hidden ">
      <button id="nav" className="flex items-center px-3 py-2 border-2 rounded text-blue-700 border-blue-700 hover:text-blue-700 hover:border-blue-700">
        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
  </div>
  <div className="menu w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8">
    <div className="text-md font-bold text-blue-700 lg:flex-grow">
      
      <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">
        About
      </a>
      <a href="#responsive-header" className=" block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">
        {/* Parameters */}
        <DropdownCaste/>
      </a>
      <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">
        {/* Levels of Education */}
        <Dropdownedu />
      </a>
    </div>
    <div className="relative mx-auto text-gray-600 lg:block hidden">
    <input 
          className="border-2 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
          type="search" name="search" placeholder="Search"//{'{'}'&gt;'{'}'} 
        />
      <button type="submit" className="absolute right-0 top-0 mt-3 mr-2">
        <svg className="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" xmlSpace="preserve" width="512px" height="512px">
          <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
        </svg>
      </button>
    </div>
    <div className="flex ">
      <a href="#" className="block text-md px-4 py-2 rounded text-blue-700 ml-2 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0">Sign
        in</a>  
      <a href="#" className=" block text-md px-4  ml-2 py-2 rounded text-blue-700 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0">login</a>
    </div>
  </div>
</nav>

<div className='w-screen sm:w-1/2 pr-7 mr-9'>
         {/* <Kerala
          hide={false}
          ChangeState={ChangeState}
          onLocationClick={onLocationClick}
        />  */}
<h1 className="font-medium leading-tight text-5xl mt-0 mb-2 text-blue-600">Kerala</h1>

        <div align="right" padding-left="50px"><iframe src={"http://127.0.0.1:5173/app.html"} height={1200} width={600}  ></iframe></div>
         
         <div className='flex space-x-10 p-5 px-20  pl-50  '>
          <DropDownyrs />
          <DropdownCaste/>
          <Dropdownedu />
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
    </div> 

      <div className='flex w-screen items-center bg-bgr' >
      <div className='flex right-0.5 justify-space-x-20 text-purple-800 rounded-xl pt-50 bg-bgr2 h'>
                <ReactApexChart
                  options={Enrolloptions.options as ApexOptions}
                  series={Enrolloptions.series}
                  type='bar'
                  height={400}
                  width={1500}
                />
      </div>
      </div>
    </div>
  </div>
  
  
        
    );

}


export default State;