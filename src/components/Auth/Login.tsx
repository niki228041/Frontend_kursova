import React, { useEffect } from 'react'
import { useGoogleLogin } from '@react-oauth/google';




const Login = () => {

    const login = useGoogleLogin({
        onSuccess: tokenResponse => console.log(tokenResponse),
        onError:() => {
            console.log('Login Failed');}
      });

    useEffect(() => {
        // /* global google */
        // if (window.google) {
        //   google.accounts.id.initialize({
        //     client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        //     callback: handleGoogle,
        //   });
    
        //   google.accounts.id.renderButton(document.getElementById("loginDiv"), {
        //     // type: "standard",
        //     theme: "filled_black",
        //     // size: "small",
        //     text: "signin_with",
        //     shape: "pill",
        //   });
    
        //   // google.accounts.id.prompt()
        // }
      }, [
        // handleGoogle
    ]);


  return (
    <>
            <p>Login Google</p>
            <button className=' bg-yellowForInputs text-fontYellowDark  p-2 rounded-full hover:bg-whiteYellow duration-200' onClick={() => login()}>
              Sign in with Google 🚀
            </button>;

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