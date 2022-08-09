import React, { useEffect, useRef, useState } from "react";
import Confetti from "react-dom-confetti";
import { IndiaMap } from "../Components";
import { config, LITRACY, StatesXcolor, TEACHERS } from "../constants";
import { ExploreC, SideBar } from "../layouts";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
} from "recharts";
function TeacherSTU() {
  const ref = useRef(null);
  const [Explore, setExplore] = useState(false);
  const [barHide, setbarHide] = useState(false);
  const [barHide2, setbarHide2] = useState(true);
  const [Current, setCurrent] = useState("");
  const [TEACHER, setTEACHER] = useState(TEACHERS);
  // const first = useRef(second)4
  // const ref = useRef(null);

  useEffect(() => {
    // console.log(temp);

    // Testing();
    StatesXcolor.map((state) => {
      // console.log(state);
      document.getElementById(
        state.State
      )!.style.fill = `rgba(${127} , ${0} , ${255} , ${
        Math.random() * 0.62 + 0.33
      })`;
    });
  }, []);

  const onScroll = () => {
    if (ref.current) {
      const { offsetHeight } = ref.current;
      const el = document.getElementById("#LETSGIVEITASHOT");
      const distanceFromTop = el?.getBoundingClientRect().top;
      // console.log();
      if (parseInt(distanceFromTop + offsetHeight) < 0) {
        setbarHide(true);
      } else {
        setbarHide(false);
      }
      // if (scrollTop >= scrollHeight - clientHeight - 20) {
      //   // console.log(
      //   //   scrollTop,
      //   //   scrollHeight,
      //   //   clientHeight,
      //   //   offsetHeight,
      //   //   ref.current
      //   // );

      //   setanimecon(!animecon);
      //   // console.log("reached bottom");
      // }
    }
  };
  const onLocationClick = (event: any) => {};

  const ChangeState = (State: string) => {
    // console.log(State, "SOCCUSS TRIFFY");
    if (Current !== State) {
      setCurrent(State);
      let temp = [];
      for (let i = 2000; i < 2023; i++) {
        // console.log();
        temp.push({
          year: i,
          TEACHERS: Math.floor(Math.random() * 5 + (i - 2000) / 3),
        });
      }
      setTEACHER(temp);
    }
  };
  const CustomTooltip = ({
    active,
    payload,
    label,
  }: {
    active: any;
    payload: any;
    label: any;
  }) => {
    // console.log(active, payload, label);

    if (active && payload && payload.length) {
      return (
        <div className='bg-gray-300 backdrop-blur-lg border-none outline-none opacity-60 p-4'>
          <p className='label'>{`Teacher Ratio in ${Current} ${label} : ${payload[0].value}`}</p>
        </div>
      );
    }

    return null;
  };
  return (
    <div className='flex items-center bg-bgr overflow-hidden'>
      <ExploreC Explore={Explore} setExplore={setExplore} />
      <SideBar setExplore={setExplore} Explore={Explore} />
      {/* <Confetti active={animecon} config={config} /> */}
      <div
        className='h-screen overflow-x-hidden items-center flex flex-col  overflow-scroll   w-screen pt-6'
        onScroll={onScroll}
      >
        <div className='text-3xl text-slate-400 font-bold font-mono cursor-pointer  px-5 py-3 rounded-2xl hover:shadow-2xl hover:shadow-slate-600'>
          Teachers And Students Analytics
        </div>
        <div className='w-screen '>
          <div className=' flex'>
            <div className='w-4/12 h-2/5 m-20 sm:ml-40'>
              <IndiaMap
                hide={true}
                ChangeState={ChangeState}
                onLocationClick={onLocationClick}
              />
            </div>
            <div className=''>
              <div
                className='text-white    my-5  flex flex-col h-80   backdrop-blur-xl shadow-white letsSEE items-center space-y-6'
                style={{ backdropFilter: "20px" }}
              >
                <div className='py-3  text-3xl w-full flex justify-center border-b border-slate-400'>
                  Country Stats
                </div>
                {/* <div className='pt-3 inline-block'>Country Stats</div> */}
                <div className='flex justify-between w-full px-5'>
                  <div className='text-slate-300'>number of schools / km</div>
                  <div>2</div>
                </div>
                <div className='flex justify-between w-full px-5'>
                  <div className='text-slate-300'>number of Govt Schools</div>
                  <div>2k</div>
                </div>
                <div className='flex justify-between w-full px-5'>
                  <div className='text-slate-300'>
                    avg teachers for 30 students
                  </div>
                  <div>1.2</div>
                </div>
                <div className='flex justify-between w-full px-5'>
                  <div className='text-slate-300'>
                    Total count private schools
                  </div>
                  <div>10k</div>
                </div>
                <div className='flex justify-between w-full px-5'>
                  <div className='text-slate-300'>
                    please fill some random text
                  </div>
                  <div>10k</div>
                </div>
              </div>
              <div className='mt-12 border rounded-xl' ref={ref}>
                <ComposedChart
                  width={600}
                  height={300}
                  data={TEACHER}
                  margin={{
                    top: 20,
                    right: 80,
                    bottom: 20,
                    left: 20,
                  }}
                  id='#LETSGIVEITASHOT'
                >
                  {/* <CartesianGrid stroke='#f5f5f5' /> */}
                  <XAxis
                    dataKey='year'
                    className='text-white'
                    // label={{
                    //   value: "NUMBER OF TEACHERS PER 100 STUDENTS",
                    //   position: "insideBottom",
                    //   offset: 5,
                    //   color: "white",
                    // }}
                    scale='band'
                  >
                    <Label
                      color='#f5f5f5'
                      // formatter={(value: any) => <div>value</div>}
                      // value=''
                      offset={0}
                      position='insideBottom'
                    >
                      <div className='text-white'>Pages of my website</div>
                    </Label>
                  </XAxis>
                  <YAxis
                    // domain={[40, "dataMax"]}
                    label={{
                      value: "Index",
                      angle: -90,
                      position: "insideLeft",
                    }}
                  />
                  <Tooltip content={<CustomTooltip active payload label />} />
                  {/* <Legend /> */}
                  {/* <Area
                    type='monotone'
                    dataKey='GIRLS'
                    fill='#8884d8'
                    stroke='#8884d8'
                  /> */}
                  <Bar
                    dataKey='TEACHERS'
                    barSize={20}
                    baseFrequency={5}
                    fill='#413ea0'
                  />
                  <Line type='monotone' dataKey='TEACHERS' stroke='#ff7300' />
                </ComposedChart>
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <div>HI YO</div>
            <div>HI YO</div>
            <div>HI YO</div>
            <div className='py-96'>HI YO</div>
          </div>
        </div>
        <div
          className={`mt-12 border rounded-xl fixed bottom-5 right-10 ${
            barHide && barHide2 ? "" : "hidden"
          }`}
        >
          <div
            className='w-full justify-end flex text-2xl text-slate-300 p-5 cursor-pointer'
            onClick={() => setbarHide2(false)}
          >
            &#x2715;
          </div>
          <ComposedChart
            width={560}
            height={260}
            data={TEACHER}
            margin={{
              top: 20,
              right: 80,
              bottom: 20,
              left: 20,
            }}
            id='#LETSGIVEITASHOT'
          >
            {/* <CartesianGrid stroke='#f5f5f5' /> */}
            <XAxis
              dataKey='year'
              className='text-white'
              // label={{
              //   value: "NUMBER OF TEACHERS PER 100 STUDENTS",
              //   position: "insideBottom",
              //   offset: 5,
              //   color: "white",
              // }}
              scale='band'
            >
              <Label
                color='#f5f5f5'
                // formatter={(value: any) => <div>value</div>}
                // value=''
                offset={0}
                position='insideBottom'
              >
                <div className='text-white'>Pages of my website</div>
              </Label>
            </XAxis>
            <YAxis
              // domain={[40, "dataMax"]}
              label={{
                value: "Index",
                angle: -90,
                position: "insideLeft",
              }}
            />
            <Tooltip content={<CustomTooltip active payload label />} />
            {/* <Legend /> */}
            {/* <Area
                    type='monotone'
                    dataKey='GIRLS'
                    fill='#8884d8'
                    stroke='#8884d8'
                  /> */}
            <Bar
              dataKey='TEACHERS'
              barSize={20}
              baseFrequency={5}
              fill='#413ea0'
            />
            <Line type='monotone' dataKey='TEACHERS' stroke='#ff7300' />
          </ComposedChart>
        </div>
      </div>
    </div>
  );
}

export default TeacherSTU;
