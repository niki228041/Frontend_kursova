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
import { apiProductSlice, useGetProductByIdQuery,useGetAllProductMessageByProductIdQuery, useGetImagesByProductIdQuery } from '../features/user/apiProductSlice';
import { useParams} from 'react-router-dom'
import ava from '../images/omoriSad.png'
import star from '../images/star__.png'
import star_none from '../images/star_none.png'
import { useSelector } from 'react-redux';
import { useGetUserByEmailQuery } from '../features/user/apiUserSlice';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Virtual } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


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

const getStarsOfCount=(num:number)=>{
  var stars = [];
  for(var i=1;i<=num;i++)
  {
    stars.push(
      <img key={i} className='h-4 mr-1 hover:contrast-75 image-container' src={star} />
    );
  }

  return stars;
}

const messageModule=(message:any)=>{
  console.log(message);

  return(
    <div key={message.id} className='flex items-center mt-4 '>
      <div className=' bg-slate-100/[.30] pt-3 pb-6 rounded-md w-full flex '>
        <img className=' h-14 rounded-full mr-3 ml-3' src={ava} />
        <div>
          <div className='flex text-[13px] items-center mb-[-10px]'>
            <div className='pr-2'>niki228041</div>
            <div>{message.dateCreated}</div>
              <div className='pt-2 ml-2 flex pb-2 justify-between'>
                <div className='flex rounded-full'>
                  {
                    getStarsOfCount(message.stars)
                  }
                </div>
              </div>

          </div>
          <div className='flex'>
            <div>{message.message}</div>
          </div>
          
          

        </div>

      </div>
    </div>
  )
}


const Model =()=> {

  var [ButtonLikeOption,setButtonLikeOption] = useState(Button_Like);
  var [ChoisedPreviewOption,setChoisedPreviewOption] = useState("#8f8f8f");

  var [stars,setStars] = useState(5);

  var userEmail = useSelector((state:any)=>state.user.user.name);
  var user = useGetUserByEmailQuery({email:userEmail});

  const params = useParams();

  const {data,isSuccess} = useGetProductByIdQuery({id:params.modelId});
  var {data:messages,isSuccess:isSuccessMessages} = useGetAllProductMessageByProductIdQuery({id:params.modelId});



  const [createMessage,{}] = apiProductSlice.useCreateProductMessageMutation();
  
  var {data:images,isSuccess:isSuccessImages} = apiProductSlice.useGetImagesByProductIdQuery({id:params.modelId});
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

  const changeStars=(star_id:string)=>{

    setStars(parseInt(star_id));

    for(var i = 1;i<=5;i++){

      var val:any = document.getElementById(i.toString());

      if(i <= parseInt(star_id))
      {
        val.src = star;  
      }
      else
      {
        val.src = star_none;  
      }
      
    }
  }

  const handleChangeSwiperImg=(it:number)=>{
    var img = document.getElementById(it.toString());
    var mainImg:any = document.getElementById("mainImg")
    mainImg.style.backgroundImage = img?.style.backgroundImage;


    console.log(it);
  }



  const handleCreateMessage=()=>{
    var message:any = document.getElementById("message");
    var new_message = {userId:user.data.id,productId:data.id,message:message?.value,stars:stars};
    createMessage(new_message);
  }


  return (
    <div className=' w-full p-10 pl-16 pr-16 grid grid-cols-10 gap-y-0  text-grayFont'>
        <div className=' w-full h-10 col-span-10'>
          Home | 3D | {data?.name}
        </div>

        <div className=' w-full h-10 col-span-10 flex justify-center'>
        </div>
        


        <div className='w-full h-full col-span-6 p-5 pl-8 pr-3'>
          {isSuccessImages && images[0]!=undefined ?
            <div className=' h-[550px] w-full rounded-xl' id='mainImg' style={{backgroundImage: `url(${'data:image/gif;base64,'+ images[0].data})`,backgroundSize:"cover",backgroundPosition:"center"}}>
            </div>
          :
            <div className=' h-[550px] text-[30px] w-full rounded-xl flex justify-center items-center' style={{backgroundColor: "#8c8c8c"}}>
              No image was found
            </div>
            
          }

            <div className=' w-full h-7 flex justify-center items-center p-4'>
              <div className='bg-gray-500/[.56] rounded-full w-10 flex justify-center items-center'>
                <span >1/2</span>
              </div>
            </div>

            <div className=' w-full h-28 rounded-full flex place-content-between justify-center items-center'>
              <div className='mr-10 hover:bg-gray-500/[.36] active:bg-gray-500/[.66]  duration-200 p-4 rounded-full'>
                <img className='h-4' src={Arrow} />
              </div>

              {isSuccessImages ?
                <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={2}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className='flex justify-center items-center h-full'
              >
                {images.map((img:any,it:number=0) => (
                    <SwiperSlide key={it++} virtualIndex={it-1} className='flex justify-center items-center rounded-xl bg-slate-300 w-10'>
                      <div onClick={()=>handleChangeSwiperImg(it-1)} id={(it).toString()} className='h-28 pr-4 pl-4 m-auto rounded-xl' style={{backgroundImage:'url(data:image/gif;base64,' + img.data +")" ,backgroundPosition:"center",backgroundSize:"cover"}}/>
                    </SwiperSlide>
                  ))}
                ...
              </Swiper>
              :
              ""}

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

        <div className='w-full col-span-10 '>
          <div className=' bg-gray-600/[.25] w-full flex flex-col place-content-between p-3 gap-x-10 rounded-xl pb-7'>

            {/* <div className=' bg-gray-200 w-full flex place-content-between p-3 items-center gap-x-10 rounded-xl pb-7'> */}

            <div className='pt-2 flex pb-2 justify-between'>
              <span>33 Comments</span>
              <div className='bg-slate-400/[.56] p-2 flex rounded-full'>
                <img onClick={()=>changeStars("1")} id='1' className='h-4 mr-1 hover:contrast-75 image-container' src={star} />
                <img onClick={()=>changeStars("2")} id='2' className='h-4 mr-1 hover:contrast-75 image-container' src={star} />
                <img onClick={()=>changeStars("3")} id='3' className='h-4 mr-1 hover:contrast-75 image-container' src={star} />
                <img onClick={()=>changeStars("4")} id='4' className='h-4 mr-1 hover:contrast-75 image-container' src={star} />
                <img onClick={()=>changeStars("5")} id='5' className='h-4 mr-1 hover:contrast-75 image-container' src={star} />
              </div>
            </div>

            <div className='flex items-center'>
              <img className='h-14 rounded-full  mr-3 ml-3' src={ava} />
              <input name='message' id='message' className='w-full focus:contrast-125 bg-gray-100 text-[15px] h-10 rounded-xl outline-none pl-3 pr-3 duration-50'></input>
            </div>
            
            

            <div className='flex items-center mt-2 justify-end'>
              <button onClick={()=>handleCreateMessage()} className=' bg-zinc-600 text-white rounded-full shadow-xl h-6 flex items-center justify-center p-5 pl-10 pr-10 hover:contrast-125 active:contrast-75 duration-50'>
                Send
              </button>
            </div>

            {/* messages */}

            {isSuccessMessages ? messages.map((mes:any)=> messageModule(mes)) : " no one had write any messages hier"}


            <div>

            </div>

          </div>
        </div>

    </div>
  )
}

export default Model
