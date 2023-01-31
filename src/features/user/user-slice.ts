//DUCKS pattern
import { createSlice,PayloadAction,nanoid,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
import parseJwt from "../../api/jwtDecodeToken";

import { SetAccessToken,SetRefreshToken } from "../../api/jwtDecodeToken";
import { IRequestToGoogleLogin } from "../../components/Auth/types";
import { ILogin } from "../../components/Auth/types";

const baseURL ='https://localhost:7142';

interface UserState{
    user:any;
    loading:boolean;
    accessToken:string;
    refreshToken:string;
    error:string|null;
    isAuth:boolean;
    message:string|null;
    allUsers:any;
}


// :UserState 
const initialState:UserState= {
    user:{},
    accessToken:"",
    refreshToken:"",
    loading:false,
    error:"",
    isAuth:false,
    message:"",
    allUsers:[]
};


export const googleLogin:any = createAsyncThunk('/api/Account/GoogleExternalLogin',async(dateFromFrontend:IRequestToGoogleLogin)=>{
    try{
        const response = await axios.post(baseURL + '/api/Account/GoogleExternalLogin',dateFromFrontend);
        return response.data;
    }catch(err:any){
        return err.message;
    }
})

export const login:any = createAsyncThunk('/api/Account/login',async(dateFromFrontend:ILogin)=>{
    try{
        const response = await axios.post(baseURL + '/api/Account/login',dateFromFrontend);
        return response.data;
    }catch(err:any){
        return err.message;
    }
})

export const postRegistration:any = createAsyncThunk('/User/Register',async(dateFromFrontend:any)=>{
    try{
        const response = await axios.post(baseURL + '/User/Register',dateFromFrontend);
        return response.data;
    }catch(err:any){
        return err.message;
    }
})


export const AuthUser:any = createAsyncThunk('',(token:string)=>{
    var decodedToken = "";
    if(token != "")
    {
        decodedToken = parseJwt(token) as any;
    }
    try{
        return decodedToken;
    }catch(err:any){
        return err.message;
    }
});



const userSlice = createSlice(
{
    name:'user',
    initialState,
    reducers:
    {
        // incremented(state)
        // {
        //     //можна міняти стейт без копіювання  (state...)=не потрібно
        //     state.value++;
        // },
        // amountAdded(state,action: PayloadAction<number>){
        //     state.value += action.payload;
        // }
        
    },
    extraReducers(builder){
        builder
            .addCase(googleLogin.pending,(state,action)=>{
                state.loading = true
            })
            .addCase(googleLogin.fulfilled,(state,action)=>{
                state.loading = false;


                SetAccessToken(action.payload);

                state.isAuth = true;
                state.accessToken = action.payload;

                state.user = parseJwt(action.payload);


                console.log(action);
                

            })
            .addCase(login.pending,(state,action)=>{
                state.loading = true
            })
            .addCase(login.fulfilled,(state,action)=>{
                state.loading = false;

                state.accessToken = action.payload;
                // state.refreshToken = action.payload.refreshToken;

                SetAccessToken(action.payload);
                // SetRefreshToken(action.payload.refreshToken);

                state.user = parseJwt(action.payload);


                state.isAuth = true;

                // (action.payload.message);
                // (state.user);
                // (state.accessToken);
                // (state.refreshToken);

                console.log(action);
            })
            .addCase(postRegistration.pending,(state,action)=>{
                state.loading = true;
            })
            .addCase(postRegistration.fulfilled,(state,action)=>{
                state.loading = false;
                

                // state.accessToken = action.payload.accessToken;
                // // state.refreshToken = action.payload.refreshToken;

                // state.user = parseJwt(action.payload.accessToken);


                // SetAccessToken(action.payload.accessToken);
                // // SetRefreshToken(action.payload.refreshToken);

                // state.isAuth = true;

                // (action.payload.message);
                // (state.user);
                // (state.accessToken);
                // (state.refreshToken);
            })
            .addCase(AuthUser.fulfilled,(state,action)=>{
                // if(action.payload == "")
                // {
                //     state.isAuth = false;
                // }
                // else
                // {
                //     state.isAuth = true;
                // }
                // (action);
                // state.user = action.payload;
            })
    }
});



// export const {login,registration} = userSlice.actions;
export default userSlice.reducer;