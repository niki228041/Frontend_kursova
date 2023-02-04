import React, { useEffect } from 'react'
import {googleLogin, postRegistration} from "../../features/user/user-slice";
import { IRequestToGoogleLogin } from "./types";
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { IRegistration } from './types';



const Registration = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLoginWithGoogleSuccess=(res:any)=>{
      console.log("Login res:",res);
      var requestLogin:IRequestToGoogleLogin = {provider:"Google",token:res.credential};

      console.log(requestLogin);
      dispatch(googleLogin(requestLogin));
    }

    const handleRegister=(data:React.FormEvent<HTMLFormElement>)=>{
      data.preventDefault();
      var curentData = new FormData(data.currentTarget);
      
      var email = curentData?.get("email")?.toString()!;
      var password = curentData?.get("password")?.toString()!;
      var rep_password = curentData?.get("rep_password")?.toString()!;
      var username = curentData?.get("username")?.toString()!;
      var name = curentData?.get("name")?.toString()!;
      var surname = curentData?.get("surname")?.toString()!;

      var e:any = document.getElementById("role");
      var role = e.value;

      var regRequest:IRegistration = {email:email,password:password,userName:username,name:name,surname:surname,role:role};

      console.log(regRequest);
      dispatch(postRegistration(regRequest));
      navigate("/models");
    }

    const handleGoogleLoginButtonAction=()=>{
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
      <form onSubmit={handleRegister}>
      <div className='bg-mainYellow grid grid-cols-1 xl:w-[750px] sm:w-[550px] m-auto rounded-xl text-fontYellowDark p-7 mt-28'>
        <div className='rounded-full text-[35px] mb-5 m-auto'>
          Sign Up
        </div>

        <div className='max-lg:grid grid-cols-1 lg:flex place-content-between'>
          <div className='rounded-full flex flex-col mb-4 w-full lg:pr-3'>
            <span>UserName</span>
            <input id='username' name='username' className=' bg-yellowForInputs text-[15px] mediumFont outline-none rounded-full h-10 pl-3 pr-3' />
          </div>

          <div className='rounded-full flex flex-col mb-4 w-full lg:pl-3'>
            <span>Email</span>
            <input id='email' name='email' className=' bg-yellowForInputs text-[15px] mediumFont outline-none rounded-full h-10 pl-3 pr-3' />
          </div>
        </div>
        

        <div className='max-lg:grid grid-cols-1 lg:flex place-content-between'>
          <div className='rounded-full flex flex-col mb-4 w-full lg:pr-3'>
            <span>Name</span>
            <input id='name' name='name' className=' bg-yellowForInputs text-[15px] mediumFont outline-none rounded-full h-10 pl-3 pr-3' />
          </div>

          <div className='rounded-full flex flex-col mb-4 w-full lg:pl-3'>
            <span>Surname</span>
            <input id='surname' name='surname' className=' bg-yellowForInputs text-[15px] mediumFont outline-none rounded-full h-10 pl-3 pr-3' />
          </div>
        </div>

        <div className='max-lg:grid grid-cols-1 lg:flex place-content-between'>
          <div className='rounded-full flex flex-col mb-4 w-full lg:pr-3'>
            <span>Password</span>
            <input type="password" id='password' name='password' className=' bg-yellowForInputs text-[15px] mediumFont outline-none rounded-full h-10 pl-3 pr-3' />
          </div>

          <div className='rounded-full flex flex-col mb-4 w-full lg:pl-3'>
            <span>Confirm Password</span>
            <input type="password" id='rep_password' name='rep_password' className=' bg-yellowForInputs text-[15px] mediumFont outline-none rounded-full h-10 pl-3 pr-3' />
          </div>
        </div>

        <div className='rounded-full flex flex-col mb-4 w-28 pr-3'>
          <span>Role</span>
          <select id='role' name='role' className=' bg-yellowForInputs text-[15px] mediumFont outline-none rounded-full h-10 pl-3 pr-3'>
            <option>-</option>
            <option value="admin" >Admin</option>
            <option value="user" >User</option>
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
      </form>

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