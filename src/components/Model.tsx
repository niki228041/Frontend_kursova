import React, { useState } from 'react'
import Car from "../images/lamborginy_better_quality.png"
import Car_Low_Quality from "../images/lamborginy.png"
import { url } from 'inspector'
import Star from '../images/star.png';
import Button_Add_To_Cart from '../images/AddToCart.png'
import Button_Like from '../images/LikeButton.png'
import Button_Like_On from '../images/heart_on.png'
import SeeMoreDetailsButton from '../images/SeeMoreDetails.png'
import Arrow from '../images/link-arrow.png'
import { useGetProductByIdQuery } from '../features/user/apiProductSlice';
import { useParams} from 'react-router-dom'


const smollAnvertising=()=>{
  return(
    <div className='flex-col flex w-40'>
      <div className=' h-28 w-40 bg-slate-700 rounded-xl mr-12' style={{background:`url(${Car_Low_Quality})`,backgroundPosition:"center",backgroundSize:"cover"}}>
      </div>
      <span className='mediumFont text-[14px]'>Mega cool guy</span>
      <span className=' overflow-hidden whitespace-nowrap w-40'>Mega super space gun at space</span>
      <div className='flex place-content-between w-full items-center'>

        <div className='flex items-center'>
          <span className='text-[12px]'>15,66$</span>
          <div className=' bg-red-400 rounded-full ml-2 pl-1 pr-1'>
            <span className=' overflow-hidden whitespace-nowrap w-40 text-[12px]'>-55%</span>
          </div>
        </div>
        <span className='text-[11px] mediumFont'>Add to cart</span>
      </div>
    </div>
  )
}


const Model =()=> {

  var [ButtonLikeOption,setButtonLikeOption] = useState(Button_Like);
  var [ChoisedPreviewOption,setChoisedPreviewOption] = useState("#8f8f8f");


  const params = useParams();

  const {data,isSuccess} = useGetProductByIdQuery({id:params.modelId});

  console.log(data);



  const handleLikeOption=(withOption:boolean)=>{
    if(withOption)
    {
      setButtonLikeOption(Button_Like_On);
    }
    else
    {
      setButtonLikeOption(Button_Like);
    }
  }

  const handleChoisedPreviewOption=()=>{
    if(ChoisedPreviewOption == "#8f8f8f")
    {
      setChoisedPreviewOption("#f49191");
    }
    else
    {
      setChoisedPreviewOption("#8f8f8f");
    }
  }


  return (
    <div className=' w-full p-10 pl-16 pr-16 grid grid-cols-10 gap-y-0  text-grayFont'>
        <div className=' w-full h-10 col-span-10'>
          Home | 3D | {data?.name}
        </div>
        <div className='w-full h-full col-span-6 p-5 pl-8 pr-3'>
            <div className=' h-[550px] w-full rounded-xl' style={{backgroundImage: `url(${Car})`,backgroundSize:"cover",backgroundPosition:"center"}}>
            </div>
            <div className=' w-full h-7 flex justify-center items-center p-4'>
              <div className='bg-gray-500/[.56] rounded-full w-10 flex justify-center items-center'>
                <span >1/2</span>
              </div>
            </div>

            <div className=' w-full h-28 rounded-full flex place-content-between justify-center items-center'>
              <div className='mr-10 hover:bg-gray-500/[.36] active:bg-gray-500/[.66]  duration-200 p-4 rounded-full'>
                <img className='h-4' src={Arrow} />
              </div>

              <img className='h-28 pr-4 pl-4' src={Car_Low_Quality}/>
              <img className='h-28 pr-4 pl-4' src={Car_Low_Quality}/>
              <img className='h-28 pr-4 pl-4' src={Car_Low_Quality}/>
              <div className='ml-10 hover:bg-gray-500/[.36] active:bg-gray-500/[.66] duration-200 p-4 rounded-full'>
                <img className='h-4 rotate-180' src={Arrow} />
              </div>
            </div>

            <div className=' w-full h-7 flex justify-center items-center p-4'>
              <div className='bg-gray-500/[.56] rounded-full w-3 h-3 ml-2 mr-2 flex justify-center items-center'/>
              <div className='bg-gray-500/[.56] rounded-full w-3 h-3 ml-2 mr-2 flex justify-center items-center' style={{background:ChoisedPreviewOption}} onMouseDown={()=>{handleChoisedPreviewOption()}}/>
            </div>

            <div>
              <span className='text-[29px]'>
                Description
              </span>
              <br/>
              
              <span className='text-[13px]'>
              Asset Description:
              <br/>
              Please read the DOCUMENTATION!
              <br/>
              You can also check out our FREE Newbie Weapons Pack!
              <br/>
              Different color materials for each equipment component for wide skin, hair, armor and eye color customization are included.
              <br/>
              Modular parts are made via internal NHAvatar script.
              <br/>
              You can choose anything you want from the Selector browser and try to walk around the scene!
              <br/>
              <br/>
              <br/>
              PBR Stylized Material:
              <br/>
              62 Handpainted Diffuse Maps
              14 Normal maps
              <br/>
              Create your own style with:
              <br/>
              5 Base skin colors
              7 Hairstyles
              4 Eye colors
              Modular Equipment with 3 Color materials
              <br/>
              Check out our content related to Stylized Character System:
              <br/>
              Orc Male
              <br/>
              Human Male
              <br/>
              Human Female
              <br/>
              Wild Hunter Outfit
              <br/>
              Pumpkin Outfit
              <br/>
              Pirate Outfit
              <br/>
              Vampire Outfit
              <br/>
              Wizard Outfit
              <br/>
              Dungeon Plate Outfit
              <br/>
              Crusader Outfit
              <br/>
              Footman Outfit
              <br/>
              Necromancer Outfit
              <br/>
              Cleric Outfit
              <br/>
              Character Additional Content
              <br/>
              Newbie Outfits
              <br/>
              Fantasy Outfits
              <br/>
              Fantasy Weapons Pack
              <br/>
              Newbie Weapons Pack
              </span>
            </div>
        </div>


        <div className=' w-full h-full col-span-4 p-5 pl-3 pr-8'>
          <div className=' w-full rounded-xlgrid grid-cols-1' >
            <div className='w-full h-10 rounded-xl ' >
                <span className='text-[27px] overflow-hidden whitespace-nowrap' >{data?.name}</span>
            </div>

            <div className='w-full h-16 rounded-xl flex items-center' >
              <div className=' bg-black rounded-full h-14 w-14 mr-3'>

              </div>
              <span className=''>{data?.userId}</span>
            </div>

            <div className='w-full h-10 rounded-xl  flex place-content-between' >
              <div className='flex items-center pl-1'>
                {data?.stars}
                <img className='h-5 pr-1' src={Star}></img>
                <img className='h-5' src={Star}></img>
              </div>

              <div className='flex items-center pl-1 text-[20px]'>
              {data?.likes} Likes
              </div>

            </div>

            <div className='w-full h-16 rounded-xl ' >
              <div className='flex place-content-between'>
                <span className='text-[29px]'>{data?.price}$</span>
                <div className=' bg-red-400 rounded-xl pr-2 pl-2'>
                  <span className='text-[29px]'>-44%</span>
                </div>
              </div>
              
            </div>
            <div className='w-full flex place-content-between' >
              <img className='rounded-xl grid h-24 pr-2 hover:contrast-75 active:contrast-125 duration-150' src={Button_Add_To_Cart}/>

              <img className='rounded-xl grid h-24 active:contrast-125 duration-150 ' onMouseEnter={()=>{handleLikeOption(true)}} onMouseLeave={()=>{handleLikeOption(false)}} src={ButtonLikeOption}/>
            </div>

            <div className='w-full rounded-xl pt-5' >
              <img className='rounded-xl grid hover:contrast-75 active:contrast-125 duration-150' src={SeeMoreDetailsButton}/>
            </div>

            <div className='w-full h-56 rounded-xl p-2' >
              <span className='text-[24px]'>General Information</span>
              <div className=' flex place-content-between  pt-2'><span>File Size</span> <span className='mediumFont'>{data?.size}</span></div>
              <div className=' flex place-content-between  pt-2'><span>Upload Date</span> <span className='mediumFont'>{data?.extension}</span></div>
              <div className=' flex place-content-between  pt-2'><span>Created In</span> <span className='mediumFont'>{data?.inWhichPrograms}</span></div>
              <div className=' flex place-content-between  pt-2'><span>Extension</span> <span className='mediumFont'>{data?.uploadDate}</span></div>
              <div className=' flex place-content-between  pt-2'><span>License type</span> <span className='mediumFont'>{data?.licenseType}</span></div>
            </div>

            <div className='w-full'>
              <div className=' bg-gray-400/[.20] w-full flex place-content-between p-3 justify-center items-center gap-x-10 rounded-xl pb-7'>
                {smollAnvertising()}
                {smollAnvertising()}
                {smollAnvertising()}
              </div>
            </div>
            
          </div>
        </div>
    </div>
  )
}

export default Model
