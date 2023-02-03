import Star from '../images/star.png';
import Car from '../images/lamborginy.png';
import ShopCart from "../images/shopping_cart.png";
import { Link, useNavigate } from 'react-router-dom';
import {apiProductSlice,useGetProductsQuery} from '../features/user/apiProductSlice'



const ModelUnit=(background:string,count_of_stars:number,number_of_recall:number,product_name:string,size:string,company:string, id:any, price:any, procent_of_sell:number = 0)=>{

    let stars = [];
    console.log(id);

    let path = "/model/"+ id;

    for (let index = 0; index < count_of_stars; index++) {
        stars.push(<img key={index} src={Star} className='h-5'/>);
    }
    

    return(
        <div key={id} className='h-[200px] w-[200px] rounded-[30px] grid grid-cols-1'>
            <Link to={path} onClick={()=>window.scroll({top: 0, left: 0, behavior: 'smooth' })} >
                <div className=' cursor-pointer h-[150px] w-full rounded-[30px] hover:contrast-75 active:contrast-125 duration-75'  style={{ backgroundImage: `url(${Car})`,backgroundPosition:"center",backgroundSize:"cover"}}/>
            </Link>
            
            {procent_of_sell > 0 ? 
            <div className='absolute h-7 w-14 bg-red-300 ml-44 flex items-center justify-center p-3 rounded-md text-red-700'>
                -{procent_of_sell}%
            </div>
            :""}
            <span className=' text-gray-500 pt-1 text-[12px]'>PAY AND PLAY</span>
            <span className=' text-[18px] text_overflow w-48 whitespace-nowrap mt-[-5px]'>{product_name}</span>
            <div className='grid-cols-6 grid pt-1 text-[13px]'>
                {stars}
                <span className='pt-0.5'>({number_of_recall})</span>
            </div>
            
            <div className='flex place-content-between'>
                <span className='text-[15px]'>${price}</span>
                <div className='flex cursor-pointer'>
                    <span className='text-[12px] text-blue-400 pt-1 '>Add to cart </span>
                    <img src={ShopCart} className='h-9 pt-1 pb-3' />
                </div>
                
            </div>
            

        </div>
    )
}

const Models=()=>{
  
  const {data,isSuccess} = useGetProductsQuery();

  return (
    <div className='flex flex-col '>
        <div className='w-full flex justify-center'>

            {/* grid */}
            <div className='grid lg:grid-cols-6 gap-x-16 gap-y-28 sm:grid-cols-3 mt-11'>
                {isSuccess ? data?.map((a:any)=>{return ModelUnit("../images/start_shape.png",a.stars,0,a.name,a.size,a.companyId,a.id,a.price)}) :""}
            </div>


        </div>

        
    </div>

  )
}

export default Models