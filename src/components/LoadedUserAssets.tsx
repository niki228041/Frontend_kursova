import React from 'react'
import Car from '../images/lamborginy.png'
import { Link } from 'react-router-dom'


const SingleModel=()=>{
  return(
    <div className="grid grid-cols-6 items-center pt-4 pb-4">

              <img className='h-[120px] col-span-1' src={Car}></img>

              <div className='flex flex-col justify-center mr-4 ml-4 col-span-2'>
                <span>CompanyName:</span>
                <span>Name:</span>
                <span>Mb:</span>
                <span>Date:</span>
              </div>

              <div className='flex flex-col justify-center col-span-2'>
                <span>20$</span>
                <span>Version</span>
                <span>File Type</span>
              </div>

              <div className='flex flex-col justify-center col-span-1'>
                <button className='h-6 mt-1 bg-whiteYellow rounded-full shadow-xl min-h-[25px]justify-center items-center pl-5 pr-5 hover:contrast-150 active:contrast-50 duration-200'>
                  Download
                </button>         
                <button className='h-6 mt-1 bg-whiteYellow rounded-full shadow-xl min-h-[25px]justify-center items-center pl-5 pr-5 hover:contrast-150 active:contrast-50 duration-200'>
                  Edit
                </button>         
                <button className='h-6 mt-1 bg-whiteYellow rounded-full shadow-xl min-h-[25px]justify-center items-center pl-5 pr-5 hover:contrast-150 active:contrast-50 duration-200'>
                  Delete
                </button>        
              </div>
            </div>
  );
}

const LoadedUserAssets=()=> {
  return (
    <div className='w-full p-10 grid'>
      <div className='w-full grid grid-cols-2'>
        <div className='text-[40px] '>
            Your Assets
            
        </div>
        <div className='text-[40px] '>
            Search Settings
        </div>
      </div>
      

      <div>
        <div className=' bg-slate-200 w-full h-[2px]'/>

        <div className='mt-2'>
          <Link to="/create-new-asset" className='pt-1 pb-1 bg-whiteYellow shadow-xl min-h-[25px]justify-center items-center pl-5 pr-5 hover:contrast-150 active:contrast-50 duration-200'>
            Upload New Asset
          </Link> 
        </div>
        
        <div className='grid grid-cols-2'>


          <div className='flex flex-col mt-12'>

            <div className="items-center pt-4 pb-4 grid grid-cols-6">
              <div className='flex flex-col  mr-4 ml-4 justify-center col-span-3'>
                1-6 items
              </div>

              <div className='flex flex-col justify-center col-span-2'>
                Info
              </div>

              <div className='flex flex-col justify-center'>
                Operation
              </div>
            </div>

            <div className=' bg-slate-200 w-full h-[2px]'/>

            {SingleModel()}
            {SingleModel()}
            {SingleModel()}
            {SingleModel()}
            {SingleModel()}
            {SingleModel()}


          </div>


          <div>
            asd
          </div>
        </div>
      </div>
      
    </div>
  )
}


export default LoadedUserAssets
