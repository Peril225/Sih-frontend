

function SearchState({ ShowState }: { ShowState: boolean }) {
  return (
    <>
      <div
        className={`text-blue-400 font-semibold text-lg pl-16 underline ${ShowState ? "" : "hidden"
          }  animate-fade`}
      >
        States And Teritories
      </div>
      <div
        className={`flex text-slate-300 text-lg justify-around ${ShowState ? "" : "hidden"
          }  animate-fade`}
      >
        <div>
          <ol className='space-y-3 '>
            <dl className='hover:underline cursor-pointer'>Telangana</dl>
            <li className='hover:underline cursor-pointer'>Uppal</li>
            <li className='hover:underline cursor-pointer'>Oddisa</li>
            <li className='hover:underline cursor-pointer'>Jaipu</li>
          </ol>
        </div>
        <div>
          <ol className='space-y-3  '>
            <dl className='hover:underline cursor-pointer'>Andra Pra</dl>
            <li className='hover:underline cursor-pointer'>Punjab</li>
            <li className='hover:underline cursor-pointer'>JAMMU</li>
            <li className='hover:underline cursor-pointer'>Kashmir</li>
          </ol>
        </div>
      </div>
    </>
  );
}

export default SearchState;
