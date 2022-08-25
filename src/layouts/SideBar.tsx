import { useEffect, useState } from "react";
import { AiTwotoneHome } from "react-icons/ai";
import { MdOutlineApps } from "react-icons/md";
import { IoIosApps } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { FcMindMap } from "react-icons/fc";
import { useNavigate } from "react-router";
import { IoDocumentTextSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function SideBar({
  setExplore,
  Explore,
}: {
  setExplore: (val: boolean) => void;
  Explore: boolean;
}) {
  const [width, setwidth] = useState<number>()
  const [open, setopen] = useState<boolean>(false)
  useEffect(() => {
    const box = document.getElementById("SIDENAV")

    setwidth(box ? box?.offsetWidth : 1)
  }, [])


  const history = useNavigate();
  const [view, setview] = useState(false)
  return (
    <div className="flex relative" onMouseEnter={() => setview(true)} onMouseLeave={() => setview(false)}>
      <div id="SIDENAV" className=' px-4 py-4 cursor-pointer hidden md:flex   bg-bgr1 h-screen justify-between items-center flex-col'>
        <div className='py-7 '>
          <div className="flex flex-col items-center mb-7" onClick={() => history("/")}>
            <div className="font-extrabold text-blue-500 ">

              TEAM
            </div>
            <div className="font-extrabold text-slate-200">

              VRIDDHI
            </div>

          </div>
          <div
            className='p-4 text-xl font-bold  text-slate-500 hover:text-slate-400 cursor-pointer '
            onClick={() => {
              setExplore(true)
            }}
          >
            <AiTwotoneHome size={30} />
          </div>
          <div
            className='p-4 text-xl font-bold  text-slate-500 hover:text-slate-400 cursor-pointer '
            onClick={() => {
              setExplore(true)
            }}
          >
            <MdOutlineApps size={30} />
          </div>
          <div
            className='p-4 text-xl font-bold  text-slate-500 hover:text-slate-400 cursor-pointer '
            onClick={() => {
              // setExplore(true)
            }}
          >
            <IoIosApps size={30} />
          </div>
          <div
            className='p-4 text-xl font-bold  text-slate-500 hover:text-slate-400 cursor-pointer '
            onClick={() => {
              // setExplore(true)
            }}
          >
            <IoDocumentTextSharp size={30} />
          </div>
          <div
            className='p-4 text-xl font-bold  text-slate-500 hover:text-slate-400 cursor-pointer '
            onClick={() => {
              // setExplore(true)
            }}
          >
            <FcMindMap size={30} />
          </div>

        </div>


        <div
          className='p-4 bg-slate-500 rounded-lg hover:text-slate-700 cursor-pointer '
          onClick={() => {
            localStorage.removeItem("auth-token");
            history("/login");
          }}
        >
          <FiLogOut size={30} className='' />
        </div>

      </div>

      <div className={`h-screen z-40 ease-in-out transform items-center transition-all duration-200 bg-bgr1 flex flex-col w-full ${view ? "w-60" : "w-0 overflow-hidden"}  absolute py-32 space-x-2 flex flex-col`} style={{ left: `${width}px` }}>
        <div className=" py-3 text-lg hover:bg-bgr2 px-3 font-medium w-full cursor-pointer font-mono text-slate-500 truncate animate-fade scroll-smooth" onClick={() => {
          // setExplore(true)
        }}><Link className="cursor-pointer"  to={"/levels/primary"}>
        DASHBOARD</Link></div>
        <div className=" py-3 text-lg hover:bg-bgr2 px-3 font-medium w-full cursor-pointer font-mono text-slate-500 truncate animate-fade scroll-smooth" onClick={() => {
          setExplore(true)
        }}>EXPLORE ALL ROUTES</div>
        <div className=" py-5 text-lg hover:bg-bgr2 px-3 font-medium cursor-pointer font-mono text-slate-500 truncate animate-fade scroll-smooth w-full pr-12 flex flex-col" onMouseEnter={() => setopen(true)} onMouseLeave={() => setopen(false)}>
          <div >LEVELS OF EDUCATION</div>
          <div
            style={{ transition: 'all 0.75s ease-in-out', height: open ? '100px' : '0px' }}
            className=" transition  transform overflow-hidden flex flex-col space-y-2 pt-2"
          >
            <div>
            <Link className="cursor-pointer"  to={"/levels/primary"}>
            PRIMARY</Link>
            </div>
            <div>
            <Link className="cursor-pointer"  to={"/levels/secondary"}>
            SECONDARY</Link>
            </div>
            <div>
            <Link className="cursor-pointer"  to={"/levels/technical"}>
            TECHNICAL</Link>
            </div>
          </div>
        </div>
        <div className=" py-3 text-lg hover:bg-bgr2 px-3 font-medium w-full cursor-pointer font-mono text-slate-500 truncate animate-fade scroll-smooth" onClick={() => {
          // setExplore(true)
        }}>ABOUT SECTION</div>
        <div className=" py-3 text-lg hover:bg-bgr2 px-3 font-medium w-full cursor-pointer font-mono text-slate-500 truncate animate-fade scroll-smooth" onClick={() => {
          // setExplore(true)
        }}>COMPARE STATES</div>

      </div>
    </div>
  );
}
