import React, { useState } from 'react'
import "../index.css"
import logo from '../images/star_shape.png'
import search from '../images/search_icon.png'

const Header =()=> {
  var [openMenu,setOpenMenu] = useState(false);
  const handleOpenMenu=()=>
  {
    setOpenMenu(!openMenu);
  }

  return (
    <div className="w-full bg-mainYellow h-14 flex-row flex place-content-between" >
        <img src={logo} className='p-2' />

        {openMenu ?
        <div className='absolute h-36 w-40 bg-mainYellow right-0 mt-14 rounded-bl-xl grid grid-cols-1 p-2'>
          <div className='hover:bg-yellowForInputs hover:contrast-75 active:outline-2 active:bg-yellow-700 cursor-pointer bg-whiteYellow h-7 pl-3 rounded-full flex items-center text-[14px] text-fontYellowDark'>Profile</div>
          <div className='hover:bg-yellowForInputs hover:contrast-75 active:outline-2 active:bg-yellow-700 cursor-pointer bg-whiteYellow h-7 pl-3 rounded-full flex items-center text-[14px] text-fontYellowDark'>Shop</div>
          <div className='hover:bg-yellowForInputs hover:contrast-75 active:outline-2 active:bg-yellow-700 cursor-pointer bg-whiteYellow h-7 pl-3 rounded-full flex items-center text-[14px] text-fontYellowDark'>Settings</div>
          <div className='hover:bg-yellowForInputs hover:contrast-75 active:outline-2 active:bg-yellow-700 cursor-pointer bg-whiteYellow h-7 pl-3 rounded-full flex items-center text-[14px] text-fontYellowDark'>Log Out</div>
        </div>
        :""}
        
        <div className="mt-3 mb-3 w-1/3 flex flex-row">
            <input className=" bg-yellowForInputs rounded-full w-full h-full active:outline-yellow-200 focus:outline-yellow-200 duration-150 pl-7 pr-5 
            caret-fontYellowDark outline-none peer text-fontYellowDark placeholder:text-fontYellowDark text-[14px]" placeholder='Enter to find whatever'/>
            <img src={search} className='absolute mt-1.5 ml-1.5 h-5 w-5  border-transparent ' />
        </div>

        <div className="ava_background h-12 w-12 rounded-full mt-auto mb-auto mr-3 active:contrast-125 cursor-pointer" onClick={handleOpenMenu}>
        </div>
    </div>
  )
}


export default Header
