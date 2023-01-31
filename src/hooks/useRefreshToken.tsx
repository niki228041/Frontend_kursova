import axios from "../api/axios";

const useRefreshToken=()=>{

    const refresh = async ()=>{
        const response = await axios.get('/User/refreshToken',{
            withCredentials:true
        });
        // setAuth(prev=>{
        //     (JSON.stringify(prev));
        //     (response.data.accessToken);
        //     return {...prev,accessToken:response.data.accessToken}
        // });
        return response.data.accessToken;
    }
}