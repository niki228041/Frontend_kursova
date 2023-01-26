import React from 'react'
import "../index.css"
import Arrow from '../images/fast-forward.png';

const BackgroundMainImage=()=> {
  return (
    <div className='w-full backgroundMainImage h-96 flex place-content-between text-justify'>
        <div className='mt-auto mb-auto h-full w-44 bg-opacity-5 bg-slate-200 hover:bg-opacity-20 active:hover:bg-opacity-40 flex justify-center'>
            <img className='m-auto' src={Arrow}></img>
        </div>
        <div className='mt-auto mb-auto h-full w-44 bg-opacity-5 bg-slate-200 hover:bg-opacity-20 active:hover:bg-opacity-40 flex justify-center'>
            <img className='m-auto rotate-180' src={Arrow}></img>
        </div>
    </div>
  )
}

export default BackgroundMainImage
