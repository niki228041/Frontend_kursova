import React from 'react'

const searchUnit=(sort:string,by:string)=>{
    return(
        <div className='min-h-[50px] grid grid-cols-1 gap-x-2 gap-y-1 pl-4 pr-4'>
            <div className='min-h-[25px] m-auto'>
                <span className=' text-fontYellowDark cursor-default'>{sort}</span>
            </div>
            <div className=' bg-whiteYellow rounded-full shadow-xl min-h-[25px] flex justify-center
                                hover:contrast-150 active:contrast-50 duration-200'>
                <span className='text-sm text-fontYellowDark cursor-default'>{by}</span>
            </div>

        </div>
    )
}


const SearchBar=()=> {
  return (
    <div className="w-full h-28 m-auto mt-[-40px] background_search_bar">
        <div className='grid grid-cols-2 gap-x-2 gap-y-3 pl-32 pr-32'>
            <div className='min-h-[110px] opacity-80' >
                <div className='grid grid-cols-5 gap-x-2 gap-y-3 pt-10'>
                    {searchUnit("Sort by...","Popularity")}
                    {searchUnit("Model type","Car")}
                    {searchUnit("Price","Free")}

                </div>
            </div>
            <div className='min-h-[110px] opacity-80 grid grid-cols-4 gap-x-2 gap-y-3'>
                <div className='min-h-[55px] col-span-3 flex items-center'>
                    <input className=" bg-yellowForInputs rounded-full w-full  duration-150 pl-7 pr-5 
                    caret-fontYellowDark outline-none peer text-fontYellowDark placeholder:text-fontYellowDark text-[14px] h-[45px]" placeholder='Enter to find model'/>
                </div>
                <div className=' min-h-[55px] flex items-center absolute mt-[28px] ml-[560px]'>
                    <button className=' bg-whiteYellow rounded-full h-[45px] pr-10 pl-10 text-fontYellowDark
                                        hover:contrast-150 active:contrast-50 duration-200'>
                        Search
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchBar
