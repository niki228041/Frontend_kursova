import React from 'react'
import logo from '../images/star_shape.png'

const Footer=()=> {
  return (
    <div className=' bg-mainYellow w-full mt-36 grid grid-cols-8 p-5 pr-24 pl-24'>
        <div className='h-36 w-full rounded-full flex flex-auto'>
            <img className='m-auto ' src={logo}></img>
        </div>
        <div className='h-36 w-full rounded-full col-span-2 flex flex-col'>
            <span className=' text-fontYellowDark text-[32px]'>Star Edition</span>
            <span className=' text-fontYellowDark text-[16px] mt-[-7px]'>Idk how man do name for websites</span>
        </div>

        <div className='h-36 w-full rounded-full col-span-2 flex flex-col pt-5'>
            <a className='text-fontYellowDark text-[17px] ' href='https://www.instagram.com/uishjro/' target="_blank">Support</a>
            <a className='text-fontYellowDark text-[17px] ' href='https://www.instagram.com/uishjro/' target="_blank">About Us</a>
            <a className='text-fontYellowDark text-[17px] ' href='https://www.instagram.com/uishjro/' target="_blank">Website rights</a>
        </div>

        <div className='h-36 w-full rounded-full col-span-3 flex flex-col pt-5'>
            <a className=' text-fontYellowDark text-[17px]' href='https://twitter.com/Neil_wakwak_228' target="_blank">Twitter</a>
            <a className=' text-fontYellowDark text-[17px]' href='https://www.facebook.com ' target="_blank">Facebook</a>
            <a className=' text-fontYellowDark text-[17px]' href="https://www.snapchat.com/" target="_blank">Snapchat</a>
            <a className=' text-fontYellowDark text-[17px]' href='https://www.instagram.com/uishjro/' target="_blank">Instagram</a>
            <a className=' text-fontYellowDark text-[17px]' href='https://www.vk.com/' target="_blank">VK</a>
        </div>
        <div className='h-24 w-full rounded-full col-span-2 pl-12 pr-12'>
            <span className=' text-fontYellowDark text-[17px]'>
            Website was edited by Lopocz Nikita all images was founded in internet blablabla idk what to write hier.
            </span>
        </div>
        <div className='h-24 w-full rounded-full col-span-3'/>
        <div className='h-24 w-full rounded-full col-span-3 flex justify-end items-center'>
            <span className=' text-fontYellowDark text-[17px]'>
                © 2023 | Just Amator Edition | Site for cursova itstep
            </span>
        </div>
    </div>
  )
}

export default Footer