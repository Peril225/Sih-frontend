//@ts-nocheck
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
function States() {
    const [view, setview] = useState(false)
    const [open, setopen] = useState<boolean>(false)
    const [Current, setCurrent] = useState("Odissa");
    // const [img, setimg] = useState();
    const [Explore, setExplore] = useState(false);
    const [loaded, setloaded] = useState(false);
    const history = useNavigate();
    const { state } = useParams();
    const img = `../assets/svgFiles/states/${state}`
    const [DROPOUTBAR, setDROPOUTBAR] = useState();
    const ChangeState = (State: string) => {
        if (Current == State) {
            return;
        }
        setCurrent(State);
    };

    useEffect(() => {
        // switch (state) {
        //     case "ap":
        //         break;
        //     // case "secondary":
        //     //     break;
        //     // case "technical":
        //     //     break;
        //     default:
        //         history("/404");
        //         break;
        // }
        StatesXcolor.map((state) => {
            document.getElementById(
                state.State
            )!.style.display = `none`;
        });
        setloaded(true)
        document.getElementById(state)!.style.display = `block`;
        document.getElementById(state)!.style.position = "absolute";
        document.getElementById(state)!.style.top = "100px";
        document.getElementById(state)!.style.fill = `rgba(137, 207, 240, 1)`;
    }, []);

    const onLocationClick = (event: any) => {
        // console.log();
        StatesXcolor.map((state) => {
            document.getElementById(
                state.State
            )!.style.fill = `rgba(137, 207, 240, 0)`;
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

                text: `DropOut Rate`,

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

                text: `Enrollment Rate`,

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

                text: `PassFail Stats`,

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
        <div className='md:flex h-screen  items-center bg-bgr '>
            <ExploreC Explore={Explore} setExplore={setExplore} />
            <SideBar setExplore={setExplore} Explore={Explore} />
            <NavBAR open={open} setExplore={setExplore} setopen={setopen} setview={setview} view={view} />
            <div className='w-full text-white  h-screen overflow-y-auto overflow-x-hidden p-9'>
                <div className='w-full flex justify-center font-mono text-3xl text-slate-300 font-bold py-5 capitalize'>
                    {state} Education
                </div>
                <div className='p-5  md:pl-20 flex justify-center items-center h-auto space-x-5 md:space-x-4'>
                    <DropdownCaste />
                    <DropDownState />
                </div>
                <div className='w-full '>
                    <div className=' xl:flex-row flex-col items-center flex xl:justify-between'>
                        <div className={`lg:w-5/12 lg:h-3/5 w-11/12 h-4/5 my-10 sm:ml-20 space-y-20 animate-fade `}>
                            <img className="rounded-2xl border-slate-500 border w-auto mx-auto" src={`http://localhost:5173/src/assets/svgFiles/states/${state}.svg`} />
                            <div className="hidden">
                                <IndiaMap
                                    hide={true}
                                    ChangeState={ChangeState}
                                    onLocationClick={onLocationClick}
                                />
                            </div>
                            <div>
                                <div
                                    className='text-white xl:flex hidden   my-5   flex-col h-300   backdrop-blur-xl shadow-white letsSEE items-center space-y-6'
                                    style={{ backdropFilter: "20px" }}
                                >
                                    <div className='py-3  text-3xl w-full flex justify-start px-4 border-b border-slate-400'>
                                        Initiatives By Various State Governments
                                    </div>
                                    {/* <div className='pt-3 inline-block'>Country Stats</div> */}
                                    <div className='px-7 '>
                                        &nbsp;The Right to Children to Free and Compulsory
                                        Education (RCFCE Act) was introduced in 2009. It
                                        guarantees free and compulsory education to all
                                        children in the age group of 6-14 years.
                                         It also guarantees education of a specified standard
                                        subscribing to non-school infrastructure, hours of
                                        school time and days of school functioning, pupil
                                        teacher ratio and teacher quality as per the Act.
                                        Under this Act there is provision of waiver of
                                        fees, distribution of free text book, reading
                                        writing materials, uniform, transportation,
                                        educational and support materials for children
                                        with special needs e.g. Hearing aids, spectacles,
                                        Braille books, crutches, etc.
                                         The Act envisages that if there is no school
                                        within a limit of 1km. of the neighbourhood a
                                        school shall be established within three years of
                                        the commencement of this Act.
                                         There is school managing committee consisting
                                        of the elected representatives of local authority,
                                        parents or guardians of the children admitted in
                                        such schools and teachers.
                                        A school development plan is provided which
                                        forms the basis of a three year plan and three
                                        annual sub-plan which access the enrolment,
                                        requirement of the number of teachers or
                                        additional teachers, physical requirement of
                                        infrastructure and training facility to the
                                        teachers.
                                         Also the development plan highlights on the
                                        minimum qualification of a teacher as laid
                                        down under the provision of the Act.
                                        The National Commission for protection of child rights are
                                        also carried out in the primary and secondary schools. As
                                        per the Act all the schools are to examine and perform the
                                        functions like review the safeguards for rights provided
                                        under this Act and recommend measures for their effective
                                        implementation.



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

export default States;

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
