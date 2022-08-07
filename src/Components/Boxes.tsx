import React from "react";

function Boxes() {
  return (
    <div>
      <div className='BOXES sm:flex  space-x-3'>
        <div className='flex space-x-3'>
          <div className='w-40  h-60 rounded-lg hover:bg-opacity-30 cursor-pointer hover:bg-red-400 bg-opacity-30 items-center justify-center flex font-bold  flex-col'>
            <div className='text-red-600'>DropOut Percent</div>
            <div className=''>2022 Stats</div>
            <div className='pt-5 text-red-700 text-lg'>+5.5 %</div>
            <div className='text-red-600 text-2xl '>25,000</div>
          </div>
          <div className='w-40  h-60 rounded-lg  bg-green-400 bg-opacity-30 hover:bg-opacity-50 cursor-pointer items-center justify-center flex font-bold  flex-col'>
            <div className='text-green-600'>EnrolMent Index</div>
            <div className=''>2022 Stats</div>
            <div className='pt-5 text-green-700 text-lg'>+5.5 %</div>
            <div className='text-green-600 text-2xl '>23,000</div>
          </div>
        </div>
        <div className='flex  space-x-3'>
          <div className='w-40  h-60 rounded-lg hover:bg-opacity-30 cursor-pointer hover:bg-blue-400 items-center justify-center flex font-bold  flex-col'>
            <div className='text-blue-600'>Pass Fail ratio</div>
            <div className=''>2022 Stats</div>
            <div className='pt-5 text-blue-700 text-lg'>+5.5 %</div>
            <div className='text-blue-600 text-2xl '>23,000</div>
          </div>
          <div className='w-40  h-60 rounded-lg hover:bg-opacity-10 cursor-pointer hover:bg-gray-400 items-center justify-center flex font-bold  flex-col'>
            <div className='text-gray-600'>GP INDEX</div>
            <div className=''>2022 Stats</div>
            <div className='pt-5 text-gray-700 text-lg'>+5.5 %</div>
            <div className='text-gray-600 text-2xl '>23,000</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Boxes;
