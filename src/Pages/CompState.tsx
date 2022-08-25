import React, { useState } from 'react'
import { ExploreC, SideBar } from '../layouts';
import NavBAR from '../layouts/navbar';
const [Explore, setExplore] = useState(false);
const [view, setview] = useState(false);
const [open, setopen] = useState<boolean>(false);

function CompState() {
    
  return (
    <div className='md:flex items-center bg-bgr overflow-hidden'>
      <ExploreC Explore={Explore} setExplore={setExplore} />
      <SideBar setExplore={setExplore} Explore={Explore} />
      <NavBAR open={open} setExplore={setExplore} setopen={setopen} setview={setview} view={view} />
    </div>
  )
}

export default CompState