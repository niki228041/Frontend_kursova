//DUCKS pattern
import { createSlice,PayloadAction,nanoid,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"


const baseURL ='https://localhost:7142';

interface ProductState{
    data:string;
    extension:string;
    loading:boolean;
    findBy:string;
}


// :UserState 
const initialState:ProductState= {
    data:"",
    extension:"",
    loading:false,
    findBy:""
};


export const getAssetByProductId:any = createAsyncThunk('/api/Products/GetAssetByProductId',async(dateFromFrontend:any)=>{
    try{
        const response = await axios.post(baseURL + '/api/Products/GetAssetByProductId',dateFromFrontend);
        return response.data;
    }catch(err:any){
        return err.message;
    }
})

// export const setFindBy:any = createAsyncThunk('',async(dateFromFrontend:any)=>{
//     try{
//         return dateFromFrontend;
//     }catch(err:any){
//         return err.message;
//     }
// })




const productSlice = createSlice(
{
    name:'product',
    initialState,
    reducers:
    {
        setFindBy:(state,action:PayloadAction<string>)=>{

            state.findBy = action.payload;
        },
        // amountAdded(state,action: PayloadAction<number>){
        //     state.value += action.payload;
        // }
        
    },
    extraReducers(builder){
        builder
            .addCase(getAssetByProductId.pending,(state,action)=>{
                state.loading = true
            })
            .addCase(getAssetByProductId.fulfilled,(state,action)=>{
                state.loading = false;

                // console.log(action.payload.data);
                // console.log(action.payload.extension);
                state.data = action.payload.data;
                state.extension = action.payload.extension;
            })
            // .addCase(setFindBy.pending,(state,action)=>{
            //     state.loading = true;
            // })
            // .addCase(setFindBy.fulfilled,(state,action)=>{
            //     state.loading = false;
            //     console.log(state.findBy);
            //     state.findBy = action.payload;
            // })
    }
});


export const { setFindBy } = productSlice.actions
// export const {login,registration} = userSlice.actions;
export default productSlice.reducer;