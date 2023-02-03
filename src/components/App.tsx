import { useDispatch, useSelector } from "react-redux";

import Header from './Header';
import BackgroundMainImage from './BackgroundMainImage';
import SearchBar from './SearchBar';
import Models from './Models';
import Footer from './Footer';
import Model from './Model';
import Login from './Auth/Login';
import { Route,Router,Routes,BrowserRouter,Outlet} from 'react-router-dom';
import { RouterProvider } from 'react-router';
import Registration from './Auth/Registration';
import LoadedUserAssets from './LoadedUserAssets';
import CreateNewAsset from './CreateNewAsset';
import { useEffect } from "react";
import { AuthUser } from "../features/user/user-slice";
import { GetAccessToken } from "../api/jwtDecodeToken";

const App=()=>{
    // var userEmail = useSelector((state:any)=>state.user.user.name);
    var dispatch = useDispatch();
    const token = GetAccessToken();

    var isAuth = useSelector((state:any)=>state.user.isAuth);


    useEffect(()=>{
        if(token){
            dispatch(AuthUser(token));
        }
    },[])

    return(
    <>
        <BrowserRouter>
        <Routes>
            <Route path='/*' element={
              <>
              <div className='flex flex-col' style={{minHeight:"100vh"}}>
                <Header/>
                {/* <div style={{height:"100vh"}}> */}
                  <Outlet/>
                {/* </div> */}
                <div className='mt-auto'>
                  <Footer/>
                </div>
              </div>
              
              </>
            }>
            
            {isAuth ?
                <>
                  <Route path="models" element={<><BackgroundMainImage/><SearchBar/><Models/></>}>
                  </Route>
                  <Route path="model/:modelId" element={<Model/>} />
                  <Route path='loaded-user-assets' element={<LoadedUserAssets/>}></Route>
                  <Route path='create-new-asset' element={<CreateNewAsset/>}></Route>
                </>
            :
            ""}
              <Route path="login" element={<><Login/></>}/>
              <Route path='registration' element={<Registration/>}/>
              
        
            </Route>
        
        </Routes>
        
      </BrowserRouter>
    </>
    )
};

export default App;