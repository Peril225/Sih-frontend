import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function Footer() {
  return (
    <div className='flex py-7 text-white bg-bgr_dark justify-around items-center w-full'>
      <div className=' flex items-center space-x-2'>
        <div className='text-2xl font-semibold'>©</div>
        <div className='text-md text-slate-500 font-bold'>
          2022 TEAM-CODINOS, INC
        </div>
        <div className='text-slate-500 pl-16 hidden xl:block'>
          <ul className='list-disc flex space-x-10 cursor-pointer'>
            <li className=''>Privacy</li>
            <li>Terms</li>
            <li>Sitemap</li>
            <li>GUIDE</li>
          </ul>
        </div>
      </div>
      <div className='flex items-center space-x-6 text-slate-500 font-bold'>
        <div className='cursor-pointer capitalize'>acknowledgement</div>
        <div className='flex items-center cursor-pointer'>
          <span className='text-xl pr-2'></span>
          <div className='capitalize'>English</div>
          <div className='text-3xl'>
            <MdOutlineKeyboardArrowDown />
          </div>
        </div>
        <div className='flex items-center cursor-pointer '>
          <div>Biblography & Resources</div>
          <div className='text-3xl rotate-180'>
            <MdOutlineKeyboardArrowDown />
          </div>
        </div>
        <div id='google_translate_element'></div>
      </div>
    </div>
  );
}

export default Footer;
