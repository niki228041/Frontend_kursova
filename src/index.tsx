import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Header from './components/Header';
import BackgroundMainImage from './components/BackgroundMainImage';
import SearchBar from './components/SearchBar';
import Models from './components/Models';
import Footer from './components/Footer';
import Model from './components/Model';
import Login from './components/Auth/Login';
import { Route,Router,Routes,BrowserRouter,Outlet} from 'react-router-dom';
import { RouterProvider } from 'react-router';
import { GoogleOAuthProvider ,GoogleLogin } from '@react-oauth/google';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={
          <>
          <Header/>
          <Outlet/>
          <Footer/>
          </>
        }>
          
        <Route path="models" element={<><BackgroundMainImage/><SearchBar/><Models/></>}>
        </Route>
        
        <Route path="model/:userId" element={<Model/>} />
        <Route path="login" element={<>
        <GoogleOAuthProvider clientId="1077056982647-chirn7dlqjl0ru51a94d4sjt385tc3gi.apps.googleusercontent.com">
          <Login/>
        </GoogleOAuthProvider>
        </>
        }>

        </Route>


        </Route>

      </Routes>
      
    </BrowserRouter>
    
  </React.StrictMode>
);
