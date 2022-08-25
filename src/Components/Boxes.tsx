function Boxes(props: {
  SelectedFeature: (val: string) => void;
  Feature: string;
}) {
  return (
    <div>
      <div className='BOXES md:flex  space-x-3'>
        <div className='flex space-x-3'>
          <div
            className={`w-40  h-60 rounded-lg hover:bg-opacity-30 cursor-pointer hover:bg-red-400  bg-opacity-30 items-center justify-center flex font-bold  flex-col ${props.Feature == "dropout" ? "bg-red-400" : ""
              }`}
            onClick={() => props.SelectedFeature("dropout")}
          >
            <div className='text-red-600'>DropOut Percent</div>
            <div className=''>2022 Stats</div>
            <div className='pt-5 text-red-700 text-lg'>+5.5 %</div>
            <div className='text-red-600 text-2xl '>25,000</div>
          </div>
          <div
            className={`w-40  h-60 rounded-lg  ${props.Feature == "" ? "bg-green-400" : ""} hover:bg-green-300 bg-opacity-30 hover:bg-opacity-20 cursor-pointer items-center justify-center flex font-bold  flex-col ${props.Feature == "lit" ? "bg-green-400 bg-opacity-20" : ""
              }`}
            onClick={() => props.SelectedFeature("lit")}
          >
            <div className='text-green-600'>Enrollment Index</div>
            <div className=''>2022 Stats</div>
            <div className='pt-5 text-green-700 text-lg'>+5.5 %</div>
            <div className='text-green-600 text-2xl '>23,000</div>
          </div>
        </div>
        <div className='flex  space-x-3'>
          <div
            className={`w-40  h-60 rounded-lg hover:bg-opacity-30 cursor-pointer hover:bg-blue-400 items-center justify-center flex font-bold  flex-col ${props.Feature == "enro" ? "bg-blue-400 bg-opacity-30" : ""
              }`}
            onClick={() => props.SelectedFeature("enro")}
          >
            <div className='text-blue-600'>Pass Fail Ratio</div>
            <div className=''>2022 Stats</div>
            <div className='pt-5 text-blue-700 text-lg'>+5.5 %</div>
            <div className='text-blue-600 text-2xl '>23,000</div>
          </div>
          <div
            className={`w-40  h-60 rounded-lg hover:bg-opacity-10 cursor-pointer hover:bg-gray-400 items-center justify-center flex font-bold  flex-col ${props.Feature == "gpi" ? "bg-gray-400 bg-opacity-10" : ""
              }`}
            onClick={() => props.SelectedFeature("gpi")}
          >
            <div className='text-gray-600'>Gender Parity Index</div>
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
