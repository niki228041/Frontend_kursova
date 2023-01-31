import React, { useEffect } from 'react'
import {googleLogin} from "../../features/user/user-slice";
import { IRequestToGoogleLogin } from "./types";
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';



const Registration = () => {

    const dispatch = useDispatch();


    const handleLoginWithGoogleSuccess=(res:any)=>{
      console.log("Login res:",res);
      var requestLogin:IRequestToGoogleLogin = {provider:"Google",token:res.credential};

      console.log(requestLogin);
      dispatch(googleLogin(requestLogin));
    }

    const handleGoogleLoginButtonAction=()=>{
      console.log("df");
      document.getElementById("loginGoogleBtn")?.click();
    }

    useEffect(() => {
        let clientId = "1077056982647-chirn7dlqjl0ru51a94d4sjt385tc3gi.apps.googleusercontent.com";

        if (typeof window === "undefined" || !window.google) {
          return;
        }

        window.google.accounts!.id.initialize({
            client_id:clientId,
            callback: handleLoginWithGoogleSuccess,
        });
        var opts:GsiButtonConfiguration = {type:"standard",theme:"outline",size:"large"};

        window.google.accounts!.id.renderButton(document.getElementById("loginGoogleBtn")!,
          opts);
        
      }, []);


  return (
    <>

      <div className='bg-mainYellow grid grid-cols-1 xl:w-[750px] sm:w-[550px] m-auto rounded-xl text-fontYellowDark p-7 mt-28'>
        <div className='rounded-full text-[35px] mb-5 m-auto'>
          Sign Up
        </div>

        <div className='max-lg:grid grid-cols-1 lg:flex place-content-between'>
          <div className='rounded-full flex flex-col mb-4 w-full lg:pr-3'>
            <span>UserName</span>
            <input className=' bg-yellowForInputs text-[15px] mediumFont outline-none rounded-full h-10 pl-3 pr-3' />
          </div>

          <div className='rounded-full flex flex-col mb-4 w-full lg:pl-3'>
            <span>Email</span>
            <input className=' bg-yellowForInputs text-[15px] mediumFont outline-none rounded-full h-10 pl-3 pr-3' />
          </div>
        </div>
        

        <div className='max-lg:grid grid-cols-1 lg:flex place-content-between'>
          <div className='rounded-full flex flex-col mb-4 w-full lg:pr-3'>
            <span>Name</span>
            <input className=' bg-yellowForInputs text-[15px] mediumFont outline-none rounded-full h-10 pl-3 pr-3' />
          </div>

          <div className='rounded-full flex flex-col mb-4 w-full lg:pl-3'>
            <span>Surname</span>
            <input className=' bg-yellowForInputs text-[15px] mediumFont outline-none rounded-full h-10 pl-3 pr-3' />
          </div>
        </div>

        <div className='max-lg:grid grid-cols-1 lg:flex place-content-between'>
          <div className='rounded-full flex flex-col mb-4 w-full lg:pr-3'>
            <span>Password</span>
            <input className=' bg-yellowForInputs text-[15px] mediumFont outline-none rounded-full h-10 pl-3 pr-3' />
          </div>

          <div className='rounded-full flex flex-col mb-4 w-full lg:pl-3'>
            <span>Confirm Password</span>
            <input className=' bg-yellowForInputs text-[15px] mediumFont outline-none rounded-full h-10 pl-3 pr-3' />
          </div>
        </div>

        <div className='rounded-full flex flex-col mb-4 w-28 pr-3'>
          <span>Role</span>
          <select className=' bg-yellowForInputs text-[15px] mediumFont outline-none rounded-full h-10 pl-3 pr-3'>
            <option>-</option>
            <option>Admin</option>
            <option>User</option>
          </select>
        </div>

        <div className=' rounded-full place-content-between mb-4 max-lg:grid grid-cols-1 lg:flex '>
          
          <button className='h-10 bg-whiteYellow rounded-full shadow-xl min-h-[25px]justify-center items-center pl-5 pr-5 hover:contrast-150 active:contrast-50 duration-200'>
            Sign In
          </button>
          <button onClick={handleGoogleLoginButtonAction} className='h-10 max-lg:mt-10  bg-slate-200 rounded-full shadow-xl min-h-[25px] flex justify-center items-center pl-5 pr-5 hover:contrast-150 active:contrast-50 duration-200'>
            <div id="loginGoogleBtn">
              Sign in with Google 🚀
            </div>
          </button>
        </div>

        <div className=' rounded-full flex place-content-between mt-4'>
          <Link to="/login" onClick={()=>{window.scroll({top: 0, left: 0, behavior: 'smooth' })}} className='text-[15px]'>
            I already have an account
          </Link>
          <Link to="/" className='text-[15px]'>
            Forget Password
          </Link>
        </div>

      </div>

      {/* <GoogleLogin
        onSuccess={credentialResponse => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      /> */}
        
    </>
  )
}

export default Registration;