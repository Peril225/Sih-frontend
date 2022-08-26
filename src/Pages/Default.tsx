
import { useEffect, useState } from 'react'

import { useNavigate } from 'react-router'
import { ExploreC, SideBar } from '../layouts'
import NavBAR from '../layouts/navbar'
import talash from "../assets/svgFiles/talash.svg"
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

function Default() {
	const [Explore, setExplore] = useState(false);
	const [view, setview] = useState(false)
	const [open, setopen] = useState<boolean>(false)
	const [impor, setimpor] = useState<boolean>(true)
	

	const hist = useNavigate()
	const [renerCom, setrenerCom] = useState(1)
	useEffect(() => {
		if (!localStorage.getItem("auth-token")) {
			hist("/")
		}
	}, [])

	function uploadFile(){
		

	}


	return (
		<div className='md:flex items-center bg-bgr overflow-hidden'>
			<ExploreC Explore={Explore} setExplore={setExplore} />
			<SideBar setExplore={setExplore} Explore={Explore} />
			<NavBAR open={open} setExplore={setExplore} setopen={setopen} setview={setview} view={view} />
			<div
				className='h-screen  justify-center items-center flex flex-col overflow-x-hidden  overflow-y-hidden   w-screen pt-6'
			>
				<div className='text-white w-screen flex flex-col items-center font-bold space-y-6'>
					<div className='flex space-x-5 px-7  py-3   backdrop-blur-xl shadow-white letsSEE1 '>
						<div className={`${impor ? "bg-bgr2" : ""} px-4 py-2 rounded-2xl cursor-pointer`} onClick={() => setimpor(true)}>Import Data</div>
						<div className={`${impor ? "" : "bg-bgr2"} px-4 py-2 rounded-2xl cursor-pointer`} onClick={() => setimpor(false)}>Export Data</div>
					</div>
					<div className='bg-bgr2 px-14 py-4 space-y-7 rounded-md flex flex-col items-center'>
						<div className='text-xl  font-medium font-sans border-b-2 pb-4 border-slate-600 px-32'>Upload Student Data to Databse</div>
						<div className='flex flex-col justify-center space-y-9 items-center space-x-4  rounded-xl w-3/4 px-5 py-3'>
							<div>
							{/* <label htmlFor="myfile">Select a file:</label> */}
							<label className="block mb-2 text-xl font-medium text-gray-300 dark:text-gray-100" >Upload file</label>

							<input className="block w-full text-xl text-gray-900 px-3 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none py-2" id="file_input" type="file" />
							</div>
							<div className='flex justify-around w-full'>
								<div className='px-8 rounded-xl bg-green-400 cursor-pointer py-3 border'>Submit</div>
								<div className='px-8 rounded-xl bg-violet-400 cursor-pointer py-3 border'>Download  Sample</div>
							</div>
							
							{/* <div className='flex cursor-pointer items-center'>
							<div>DropOut</div> 
							<MdOutlineKeyboardArrowDown size={25} /></div> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Default