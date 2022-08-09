import React from "react";

function Explore({
  Explore,
  setExplore,
}: {
  Explore: boolean;
  setExplore: (val: boolean) => void;
}) {
  return (
    <div
      className={`${
        Explore ? "w-screen" : "w-0 overflow-hidden"
      } fixed z-10 text-slate-400 ease-in-out transform  transition-all duration-200 h-screen bg-black`}
    >
      <div
        className='top-0 right-0 left-auto absolute cursor-pointer p-3  text-5xl rounded-lg m-3 bg-bgr1  hover:bg-bgr hover:text-white'
        onClick={() => setExplore(false)}
      >
        &times;
      </div>
      <div className='h-screen w-screen p-28 flex flex-col space-y-9 justify-center items-center animate-fade'>
        <div className='flex space-x-10 '>
          <div className='Cardbg1 flex w-44 h-64  rounded-xl  cursor-pointer transition ease-in-out hover:scale-110 duration-300 text-slate-600 font-bold font-mono text-2xl justify-center items-center p-5'>
            Explore Education Statistics Among States
          </div>
          <div className='Cardbg flex w-44 h-64  rounded-xl p-5 cursor-pointer transition ease-in-out hover:scale-110 duration-300 text-slate-600 font-bold font-mono text-2xl justify-center items-center'>
            Explore State Historical DropOut Rate
          </div>
          <div className='bg-gradient-to-r from-sky-400 to-cyan-300 flex w-44 h-64  rounded-xl p-5 cursor-pointer transition ease-in-out hover:scale-110 duration-300 text-slate-600 font-bold font-mono text-2xl justify-center items-center'>
            Gender Pararity Index Historical data
          </div>
          <div className='bg-gradient-to-r from-fuchsia-600 to-pink-600 flex w-44 h-64  rounded-xl p-5 cursor-pointer transition ease-in-out hover:scale-110 duration-300 text-slate-600 font-bold font-mono text-2xl justify-center items-center'>
            FindOut Out-Turn Rate Accross Country
          </div>

          <div className='Cardbg2 flex w-44 h-64  rounded-xl p-5 cursor-pointer transition ease-in-out hover:scale-110 duration-300 text-slate-600 font-bold font-mono text-2xl justify-center items-center'>
            Pass & fail Statistics Analysis
          </div>
          <div className='bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 flex w-44 h-64  rounded-xl p-5 cursor-pointer transition ease-in-out hover:scale-110 duration-300 text-slate-400 font-bold font-mono text-2xl justify-center items-center'>
            Student Enrollment rate Data Analytics accross INDIA
          </div>
        </div>
        <div className='flex space-x-10  animate-fade'>
          <div className='bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 flex w-44 h-64  rounded-xl p-5 cursor-pointer transition ease-in-out hover:scale-110 duration-300 text-slate-300 font-bold font-mono text-2xl justify-center items-center'>
            Find Out How Literacy Rate did Over Years
          </div>
          <div className='Cardbg2 flex w-44 h-64  rounded-xl p-5 cursor-pointer transition ease-in-out hover:scale-110 duration-300 text-slate-600 font-bold font-mono text-2xl justify-center items-center'>
            Educational Institutions and their Performance in INDIA
          </div>
          <div className='Cardbg flex w-44 h-64  rounded-xl p-5 cursor-pointer transition ease-in-out hover:scale-110 duration-300 text-slate-600 font-bold font-mono text-2xl justify-center items-center'>
            Caste Based educational info From Ages Simplified
          </div>
          <div className='bg-gradient-to-r from-sky-400 to-cyan-300 flex w-44 h-64  rounded-xl p-5 cursor-pointer transition ease-in-out hover:scale-110 duration-300 text-slate-600 font-bold font-mono text-2xl justify-center items-center'>
            Historical INformation 'bout India is doin
          </div>
          <div className='bg-gradient-to-r from-fuchsia-600 to-pink-600 flex w-44 h-64  rounded-xl p-5 cursor-pointer transition ease-in-out hover:scale-110 duration-300 text-slate-600 font-bold font-mono text-xl  justify-center items-center'>
            How to Contribute , documentation devs who made it possible
          </div>

          <div className='Cardbg1 flex w-44 h-64  rounded-xl p-5 cursor-pointer transition ease-in-out hover:scale-110 duration-300 text-slate-600 font-bold font-mono text-2xl justify-center items-center'>
            How Many Students does a Average Teacher get Assigned?
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
