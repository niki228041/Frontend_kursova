import React from 'react'
import {INewAsset} from "./types";
import { useSelector } from 'react-redux';
import { useGetUserByEmailQuery } from '../features/user/apiUserSlice';
import { apiProductSlice, useGetCompanysQuery } from '../features/user/apiProductSlice';

const CreateNewAsset=()=> {
    var userEmail = useSelector((state:any)=>state.user.user.name);

    var user = useGetUserByEmailQuery({email:userEmail});

    const {data:companys,isSuccess} = useGetCompanysQuery();
   

    //mutations
    const [createProduct,{}] = apiProductSlice.useCreateProductMutation();

    function getFileExtension(filename:any){

      // get file extension
      const extension = filename.split('.').pop();
      return extension;
  }

    const handleCreate=(data:React.FormEvent<HTMLFormElement>)=>{
        data.preventDefault();
        var curentData = new FormData(data.currentTarget);
        
        var Name = curentData?.get("Name")?.toString()!;
        var InWhichPrograms = curentData?.get("inWhichPrograms")?.toString()!;
        var LicenseType = curentData?.get("licenseType")?.toString()!;
        var Price = parseFloat(curentData?.get("Price")?.toString()!);
        var Version = curentData?.get("version")?.toString()!;
        var file:any = curentData?.get("Asset");
        var {files}:any = document?.getElementById("Images");

        if(file.size.length < 7) return `${Math.round(file.size/1024).toFixed(2)}kb`
            var sizeInMb = `${(Math.round(file.size.toString()/1024)/1000).toFixed(2)}MB`;
        

        var re:any = /(?:\.([^.]+))?$/;
        var ext = re.exec(file.name)[1];


        var e:any = document.getElementById("Company");
        var companyId = e.value;

        var fileBytes = toBase64(file);

        var imagesBytes = [];
        var imagesBytes_toSend:any = [];
        
        for(var it =0;it<files.length;it++){
          imagesBytes.push(files[it]);
        } 



        imagesBytes.forEach((img:any)=>{
          let byte_img = toBase64(img);
          byte_img.then((res:any)=>{
            var res_byte_img = res.split(',')[1];
            imagesBytes_toSend.push({Data:res_byte_img,extension:'.' + getFileExtension(img.name)});
          })
        })
        

        fileBytes.then((res:any)=>{
            var bytesToRequest = res.split(',')[1];
            let newAsset:INewAsset = {
                name:Name,
                inWhichPrograms:InWhichPrograms,
                licenseType:LicenseType,
                extension:ext,uploadDate: new Date(Date.now()),
                userId:user.data.id,
                companyId:companyId,
                data:bytesToRequest,
                size:sizeInMb,
                price:Price,
                version:Version,
                images_:imagesBytes_toSend
            };
            console.log(newAsset);

            createProduct(newAsset);
        })



        
    }

    const toBase64:any = (file:File) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    
      });
    

  return (
    <div>
        
    

        <form onSubmit={handleCreate} >
            <div className='bg-mainYellow grid grid-cols-1 xl:w-[450px] sm:w-[550px] m-auto rounded-xl text-fontYellowDark p-7 mt-28'>
              <div className='rounded-full text-[35px] mb-5 m-auto'>
                Create Model
              </div>
              <div className=' rounded-full flex flex-col mb-4'>
                <span>Name</span>
                <input name='Name' id="Name" className=' bg-yellowForInputs text-[15px] mediumFont outline-none rounded-full h-10 pl-3 pr-3' />
              </div>

              <div className=' rounded-full flex flex-col mb-4'>
                <span>Price</span>
                <input name='Price' id="Price" className=' bg-yellowForInputs text-[15px] mediumFont outline-none rounded-full h-10 pl-3 pr-3' />
              </div>

              <div className=' rounded-full flex flex-col mb-4'>
                <span>In Which Programs</span>
                <input name='inWhichPrograms' id="inWhichPrograms" className=' bg-yellowForInputs text-[15px] mediumFont outline-none rounded-full h-10 pl-3 pr-3' />
              </div>

              <div className=' rounded-full flex flex-col mb-4'>
                <span>License Type</span>
                <input name='licenseType' id="licenseType" className=' bg-yellowForInputs text-[15px] mediumFont outline-none rounded-full h-10 pl-3 pr-3' />
              </div>

              <div className=' rounded-full flex flex-col mb-4'>
                <span>Product Version</span>
                <input name='version' id="version" className=' bg-yellowForInputs text-[15px] mediumFont outline-none rounded-full h-10 pl-3 pr-3' />
              </div>

              <div className=' rounded-full flex flex-col mb-4'>
                <span>Asset to Upload</span>
                <input name='Asset' id="Asset" type="file" className='hidden' />
                <label htmlFor='Asset' className=' bg-yellowForInputs hover:opacity-90 text-[15px] mediumFont outline-none rounded-full h-10 pl-3 pr-3 flex justify-center items-center cursor-pointer' >
                    Upload Asset
                </label>
              </div>

              <div className=' rounded-full flex flex-col mb-4'>
                <span>Asset Images</span>
                <input name="Images" id="Images" multiple type="file" className='hidden' />
                <label htmlFor='Images' className=' bg-yellowForInputs hover:opacity-90 text-[15px] mediumFont outline-none rounded-full h-10 pl-3 pr-3 flex justify-center items-center cursor-pointer' >
                    Upload Images
                </label>
              </div>

              <div className=' rounded-full flex flex-col mb-4'>
                <span>Company</span>
                <div className='rounded-full flex flex-col mb-4 w-28 pr-3'>
                  <select name='Company' id="Company" className=' bg-yellowForInputs text-[15px] mediumFont outline-none rounded-full h-10 pl-3 pr-3'>
                    <option>-</option>
                    {/* {companys.data.map} */}
                    {isSuccess ? companys?.map((a:any)=>{return <option value={a.id} id={a.id} key={a.id}>{a.name}</option>;}) : ""}
                  </select>
                </div>
              </div>

              <div className=' rounded-full place-content-between mb-4 max-lg:grid grid-cols-1 lg:flex '>

                <button type="submit" className='h-8 w-full bg-whiteYellow rounded-full shadow-xl min-h-[25px]justify-center items-center pl-5 pr-5 hover:contrast-150 active:contrast-50 duration-200'>
                  Upload New Asset
                </button>
                
              </div>

            </div>
        </form>
    </div>
  )
}

export default CreateNewAsset;