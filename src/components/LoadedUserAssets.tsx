import React from 'react'
import {useEffect} from 'react'
import Car from '../images/lamborginy.png'
import { Link } from 'react-router-dom'
import { apiProductSlice, useGetCompanysQuery, useGetFirstImagesQuery, useGetProductByUserIdQuery } from '../features/user/apiProductSlice';
import { useGetUserByEmailQuery } from '../features/user/apiUserSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getAssetByProductId } from '../features/user/product-slice';


const SingleModel=(product:any,companys:any,images:any,handleDelete:any,download:any)=>{
  var comp = companys.find((a:any)=>{return a.id == product.companyId});

  let img = images.find((p:any)=>p.productId == product.id);
  return(
    <div key={product.id} className="grid grid-cols-6 items-center pt-4 pb-4">

              {
                img != undefined?
                  <img className='h-[120px] col-span-1' src={'data:image/gif;base64,' + img.data}></img>
                :
                  <div className='h-[120px] col-span-1'style={{backgroundColor: "#8c8c8c"}}>
                    No image was found
                  </div>
                }

              <div className='flex flex-col justify-center mr-4 ml-4 col-span-2'>
                <span>{comp.name}</span>
                <span>{product.name}</span>
                <span>{product.size}</span>
                <span>{product.uploadDate}</span>
              </div>

              <div className='flex flex-col justify-center col-span-2'>
                <span>{product.price}$</span>
                <span>Version</span>
                <span>{product.extension}</span>
              </div>

              <div className='flex flex-col justify-center col-span-1'>
                <button onClick={()=>download(product.id,"img","image/png")} className='h-6 mt-1 bg-whiteYellow rounded-full shadow-xl min-h-[25px]justify-center items-center pl-5 pr-5 hover:contrast-150 active:contrast-50 duration-200'>
                  Download
                </button>         
                <button className='h-6 mt-1 bg-whiteYellow rounded-full shadow-xl min-h-[25px]justify-center items-center pl-5 pr-5 hover:contrast-150 active:contrast-50 duration-200'>
                  Edit
                </button>         
                <button onClick={()=>handleDelete(product.id)} className='h-6 mt-1 bg-whiteYellow rounded-full shadow-xl min-h-[25px]justify-center items-center pl-5 pr-5 hover:contrast-150 active:contrast-50 duration-200'>
                  Delete
                </button>        
              </div>
            </div>
  );
}

const LoadedUserAssets=()=> {


  var userEmail = useSelector((state:any)=>state.user.user.name);
  var user = useGetUserByEmailQuery({email:userEmail});
  


  const {data:companys,isSuccess:isCompanySuccess} = useGetCompanysQuery();

  const {data,isSuccess} = useGetProductByUserIdQuery({id:user?.data?.id});

  const {data:firstImages,isSuccess:isSuccessFirstImages} = useGetFirstImagesQuery();

  const [deleteProduct,{}] = apiProductSlice.useDeleteProductByIdMutation();

  // console.log(user);

  const handleDelete=(id:string)=>
  {
    deleteProduct({id:id});
  }

  const dispatch = useDispatch();
  var product:any = useSelector((state:any)=>state.product);




function download(productId:number,fileName:string, contentType:any) {
  
  var hey = dispatch(getAssetByProductId({id:productId})).then((res:any)=>{
    const product_to_dowload = res.payload;
      const extension = ".png";
      const imagesTypes = [".png",'.jpeg','.jpg','.webp'];

      if(imagesTypes.find((a)=>a == product_to_dowload.extension))
      {
        console.log("it is a image");
      }

      var a = document.createElement("a"); //Create <a>
      a.href = `data:${product_to_dowload.extension};base64,` + product_to_dowload.data; //Image Base64 Goes here
      a.download = "youeFile" + product_to_dowload.extension; //File name Here
      a.click(); //Downloaded file

  });

  
  // setTimeout(() => {
  //   if (product != undefined) {
  //     console.log(product);
  //     const extension = ".png";
  //     const imagesTypes = [".png",'.jpeg','.jpg','.webp'];

  //     if(imagesTypes.find((a)=>a == product.extension))
  //     {
  //       console.log("it is a image");
  //     }

  //     var a = document.createElement("a"); //Create <a>
  //     a.href = `data:${product.extension};base64,` + product.data; //Image Base64 Goes here
  //     a.download = "youeFile" + product.extension; //File name Here
  //     a.click(); //Downloaded file
  //   } else {
  //     return;
  //   }
  // }, 5000);
}

  // useEffect(()=>{
  //   console.log("useEffect works");
  //   console.log(product);
  // },[product])
  

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
                {isSuccess ? data.length : "0"} items
              </div>

              <div className='flex flex-col justify-center col-span-2'>
                Info
              </div>

              <div className='flex flex-col justify-center'>
                Operation
              </div>
            </div>

            <div className=' bg-slate-200 w-full h-[2px]'/>

            {isSuccess && isCompanySuccess && isSuccessFirstImages ? data.map((prod:any)=> SingleModel(prod,companys,firstImages,handleDelete,download)) : "you dont have a own loaded product"}

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
