import React from 'react'
import { Link } from 'react-router-dom'
import { States } from "../constants"

function Testin(props: { val: string }) {
    const filter = props.val.toUpperCase()
    return (
        <div className='w-full py-4  bg-bgr2 rounded-lg shadow-lg shadow-slate-400'>
            <ul className='w-full '>
                {
                    States.map((elem, index) =>
                        <li className={`w-full px-5 border-b py-3 text-slate-300 text-md font-mono ${elem.toUpperCase().indexOf(filter) > -1 ? "" : "hidden"}`}>
                            <Link to={`/states/${elem.replace(" ", "")}`} onClick={() => console.log(elem)
                            }>
                                {elem}
                            </Link>
                        </li>
                    )
                }
                {/** need to fill it up */}
                <li className='w-full px-5 border-b py-3 text-slate-300 text-md font-mono'>Primary</li>
                <li className='w-full px-5 border-b py-3 text-slate-300 text-md font-mono'>Secondary</li>
                <li className='w-full px-5 border-b py-3 text-slate-300 text-md font-mono'>Technical</li>
                <li className='w-full px-5 border-b py-3 text-slate-300 text-md font-mono'>About</li>
                <li className='w-full px-5 border-b py-3 text-slate-300 text-md font-mono'>Dashboard</li>
                <li className='w-full px-5 border-b py-3 text-slate-300 text-md font-mono'>OuTturn</li>
            </ul>
        </div>
    )
}

export default Testin