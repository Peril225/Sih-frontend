
import { AiTwotoneHome } from 'react-icons/ai'
import { FcMindMap } from 'react-icons/fc'
import { FiLogOut } from 'react-icons/fi'
import { HiMenuAlt3 } from 'react-icons/hi'
import { IoIosApps } from 'react-icons/io'
import { IoDocumentTextSharp } from 'react-icons/io5'
import { MdOutlineApps } from 'react-icons/md'
import { useNavigate } from 'react-router'

function NavBAR({ setview, view, setExplore, setopen, open }: { setview: (val: boolean) => void, view: boolean, setExplore: (val: boolean) => void, setopen: (val: boolean) => void, open: boolean, }) {
    const history = useNavigate();
    return (
        <>
            <nav className="md:hidden absolute h-screen overflow-hidden">
                <div className='px-5  flex bg-bgr1 w-screen justify-between items-center md:hidden'>
                    <div className="flex flex-col items-center py-6" onClick={() => history("/")}>
                        <div className="font-extrabold text-blue-500 ">

                            TEAM
                        </div>
                        <div className="font-extrabold text-slate-200">

                            VRIDDHI
                        </div>

                    </div>
                    <div
                        className='p-2 text-slate-400 rounded-xl hover:text-red-400 cursor-pointer '
                        onClick={() => {

                        }}
                    >
                        <HiMenuAlt3 size={40} className='' onClick={() => setview(!view)} />
                    </div>
                </div>
                <div>
                    <div className={` z-40 ease-in-out transform items-center transition-all duration-200 bg-bgr1 flex flex-col w-full ${view ? "h-full" : "h-0 overflow-hidden"}  absolute  space-x-2 flex flex-col`}>
                        <ul className="w-full space-y-6 px-10 py-10">
                            <li className="w-full  flex justify-between items-center">
                                <div>
                                    <div
                                        className='p-4 text-xl font-bold  text-slate-500 hover:text-slate-400 cursor-pointer '
                                        onClick={() => {
                                            // setExplore(true)
                                        }}
                                    >
                                        <AiTwotoneHome size={30} />
                                    </div>
                                </div>
                                <div><div className=" py-3 text-lg hover:bg-bgr2 px-3 font-medium w-full cursor-pointer font-mono text-slate-500 truncate animate-fade scroll-smooth" onClick={() => {
                                    // setExplore(true)
                                }}>DASHBOARD</div>
                                </div>
                            </li>
                            <li className="w-full  flex justify-between">
                                <div>
                                    <div
                                        className='p-4 text-xl font-bold  text-slate-500 hover:text-slate-400 cursor-pointer '
                                        onClick={() => {
                                            setExplore(true)
                                        }}
                                    >
                                        <MdOutlineApps size={30} />
                                    </div>
                                </div>
                                <div>
                                    <div className=" py-3 text-lg hover:bg-bgr2 px-3 font-medium w-full cursor-pointer font-mono text-slate-500 truncate animate-fade scroll-smooth" onClick={() => {
                                        setExplore(true)
                                    }}>EXPLORE ALL ROUTES</div>
                                </div>
                            </li>
                            <li className="w-full  flex justify-between">
                                <div>
                                    <div
                                        className='p-4 text-xl font-bold  text-slate-500 hover:text-slate-400 cursor-pointer '
                                        onClick={() => {
                                            // setExplore(true)
                                        }}
                                    >
                                        <IoIosApps size={30} />
                                    </div>
                                </div>
                                <div>
                                    <div className=" py-5 text-lg hover:bg-bgr2  font-medium cursor-pointer font-mono text-slate-500 truncate animate-fade scroll-smooth w-full  flex flex-col" onMouseEnter={() => setopen(true)} onMouseLeave={() => setopen(false)}>
                                        <div >LEVELS OF EDU</div>
                                        <div
                                            style={{ transition: 'all 0.75s ease-in-out', height: open ? '100px' : '0px' }}
                                            className=" transition  transform overflow-hidden flex flex-col space-y-2 pt-2"
                                        >
                                            <div>
                                                PRIMARY
                                            </div>
                                            <div>
                                                SECONDARY
                                            </div>
                                            <div>
                                                TECHNICAL
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="w-full  flex justify-between">
                                <div>
                                    <div
                                        className='p-4 text-xl font-bold  text-slate-500 hover:text-slate-400 cursor-pointer '
                                        onClick={() => {
                                            // setExplore(true)
                                        }}
                                    >
                                        <IoDocumentTextSharp size={30} />
                                    </div>
                                </div>
                                <div>
                                    <div className=" py-3 text-lg hover:bg-bgr2 px-3 font-medium w-full cursor-pointer font-mono text-slate-500 truncate animate-fade scroll-smooth" onClick={() => {
                                        // setExplore(true)
                                    }}>ABOUT SECTION</div>
                                </div>
                            </li>
                            <li className="w-full  flex justify-between">
                                <div>
                                    <div
                                        className='p-4 text-xl font-bold  text-slate-500 hover:text-slate-400 cursor-pointer '
                                        onClick={() => {
                                            // setExplore(true)
                                        }}
                                    >
                                        <FcMindMap size={30} />
                                    </div>
                                </div>
                                <div>
                                    <div className=" py-3 text-lg hover:bg-bgr2 px-3 font-medium w-full cursor-pointer font-mono text-slate-500 truncate animate-fade scroll-smooth" onClick={() => {
                                        // setExplore(true)
                                    }}>COMPARE STATES</div>
                                </div>
                            </li>
                            <li className="w-full  flex justify-between">

                                <div
                                    className='p-4 text-xl font-bold  text-slate-500 hover:text-slate-400 cursor-pointer '
                                    onClick={() => {
                                        // setExplore(true)
                                    }}
                                >
                                    <FiLogOut size={30} />
                                </div>
                                <div>
                                    <div className=" py-3 text-lg hover:bg-bgr2 px-3 font-medium w-full cursor-pointer font-mono text-slate-500 truncate animate-fade scroll-smooth" onClick={() => {
                                        // setExplore(true)
                                    }}>LOGIN / LOGOUT</div>
                                </div>

                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBAR