import React, { useState } from 'react'
import { useEffect } from 'react'
import { useGetProductsQuery } from '../features/user/apiProductSlice'
import { useNavigate } from 'react-router-dom'
import {setFindBy} from '../features/user/product-slice'
import { useDispatch } from 'react-redux'

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
    const [onSearch,setSearch]= useState(false);
    const [inputText, setInputText] = useState("");
    const [dropdown, setDropdown] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(()=>{
        setDropdown(inputText.length != 0 );
    },[inputText])

    var {data,isSuccess} = useGetProductsQuery({findBy:""});
    var products = data;
    
    const handleGo=(e:string)=>{
        // sortArr();
        setInputText(e);

        if(e == '' || e == null){
            setSearch(false);
            // navigate("posts")
        }
        else{
            setSearch(true);
            // navigate("search");
        }
    }

    const openFoundedModel=(id:any)=>{
        let path = "/model/"+ id;
        navigate(path);
    }

    const sortProductsByInput=()=>{
        // products = products?.filter(
        //     (item:any)=>{
        //         return inputText.toLowerCase() === ' ' ? item : item.name.toLowerCase().includes(inputText) });
        // console.log(isSuccess);
        dispatch(setFindBy(inputText));
    }

  return (
    <div className="w-full h-28 m-auto mt-[-40px] background_search_bar">
        <div className='grid grid-cols-2 gap-x-2 gap-y-3 ml-20 pl-32 pr-32'>
            <div className='min-h-[110px] opacity-80' >
                <div className='grid grid-cols-5 gap-x-2 gap-y-3 pt-10'>
                    {searchUnit("Sort by...","Popularity")}
                    {searchUnit("Model type","Car")}
                    {searchUnit("Price","Free")}

                </div>
            </div>
            <div className='min-h-[110px] opacity-80 grid grid-cols-4 gap-x-2 gap-y-3'>
                <div className='min-h-[55px] col-span-3 flex items-center'>
                    <input value={inputText} onChange={event => handleGo(event.target.value)} className=" bg-yellowForInputs rounded-full w-full  duration-150 pl-7 pr-20 
                    caret-fontYellowDark outline-none peer text-fontYellowDark placeholder:text-fontYellowDark text-[14px] h-[45px]" placeholder='Enter to find model'/>

                    <div className='min-h-[55px] flex items-center absolute ml-[25%]'>
                        <button onClick={()=>{sortProductsByInput()}} className=' bg-whiteYellow rounded-full h-[45px] pr-10 pl-10 text-fontYellowDark
                                            hover:contrast-150 active:contrast-50 duration-200 '>
                            Search
                        </button>
                    </div>

                    
                </div>

                    
                    {dropdown ?
                        <ul style={{}} className='font-normal shadow-md chatSection example absolute mt-20'>
                            {/*  */}
                            {isSuccess ? products?.filter(
                                (item:any)=>{
                                    return inputText.toLowerCase() === ' ' ? item : item.name.toLowerCase().includes(inputText) })
                                    .map((product:any,it:any=0)=>
                                    <li className='searchBar_selector bg-neutral-500/[.22] hover:bg-slate-600 cursor-pointer' key={(it++).toString()} 
                                    onClick={()=>openFoundedModel(product.id)}>
                                        {product.name}
                                    </li>

                                    ) : ""}
                        </ul>
                    :""}

                
            </div>
        </div>
    </div>
  )
}

export default SearchBar
