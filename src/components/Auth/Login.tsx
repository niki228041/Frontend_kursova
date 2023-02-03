import React, { useEffect } from 'react'
import {googleLogin,login} from "../../features/user/user-slice";
import { IRequestToGoogleLogin } from "./types";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { ILogin } from './types';
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"


const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user:any = useSelector((state:any)=>state.user);



    const handleLoginWithGoogleSuccess=(res:any)=>{
      console.log("Login res:",res);
      var requestLogin:IRequestToGoogleLogin = {provider:"Google",token:res.credential};

      console.log(requestLogin);
      dispatch(googleLogin(requestLogin));
      navigate("/models");
    }

    const handleLogin=(data:React.FormEvent<HTMLFormElement>)=>{
      data.preventDefault();
      var curentData = new FormData(data.currentTarget);
      
      var Email = curentData?.get("Email")?.toString()!;
      var Password = curentData?.get("Password")?.toString()!;

      var loginRequest:ILogin = {email:Email,password:Password};

      console.log(loginRequest);
      dispatch(login(loginRequest));
      navigate("/models");
    }


    useEffect(() => {

      console.log('i fire once');
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

      <form onSubmit={handleLogin}>
        <div className='bg-mainYellow grid grid-cols-1 xl:w-[450px] sm:w-[550px] m-auto rounded-xl text-fontYellowDark p-7 mt-28'>
          <div className='rounded-full text-[35px] mb-5 m-auto'>
            Sign In
          </div>
          <div className=' rounded-full flex flex-col mb-4'>
            <span>Email</span>
            <input name='Email' id="Email" type="email" className=' bg-yellowForInputs text-[15px] mediumFont outline-none rounded-full h-10 pl-3 pr-3' />
          </div>

          <div className=' rounded-full flex flex-col mb-4'>
            <span>Password</span>
            <input name='Password' id="Password" type="password" className=' bg-yellowForInputs text-[15px] mediumFont outline-none rounded-full h-10 pl-3 pr-3' />
          </div>

          <div className=' rounded-full place-content-between mb-4 max-lg:grid grid-cols-1 lg:flex '>

            <button type="submit" className='h-8 bg-whiteYellow rounded-full shadow-xl min-h-[25px]justify-center items-center pl-5 pr-5 hover:contrast-150 active:contrast-50 duration-200'>
              Sign In
            </button>
            <button className='h-8 max-lg:mt-10  bg-slate-200 rounded-full shadow-xl min-h-[25px] flex justify-center items-center pl-5 pr-5 hover:contrast-150 active:contrast-50 duration-200'>
              <div id="loginGoogleBtn">
                Sign in with Google 🚀
              </div>
            </button>
          </div>

          <div className=' rounded-full flex place-content-between mt-4'>
            <Link to="/registration" onClick={()=>{window.scroll({top: 0, left: 0, behavior: 'smooth' })}} className='text-[15px]'>
              Create Account
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

export default Login;