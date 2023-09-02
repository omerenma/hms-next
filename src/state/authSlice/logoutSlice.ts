'use client'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ApiRequest } from "../../services/fetch";
import { baseUrl , localUrl} from "../url/baseUrl";
interface LoginState {
  loading: boolean;
  success: boolean;
  data: {};
  error: false;
  errorData: {};
  token:string
}

const initialState = {
  loading: false,
  success: false,
  data: {} ,
  name:"",
  token:"",
  role:"",
  error: false,
  errorData:{},
  id:"",
  business_id:""
  
} 

interface Data {
  email: string;
  password: string;
}

interface LoginResponse {
    email:string;
    message:string;
    name:string;
    token:string;
    role:string;
    data:{} 
    
}
// ACTION
export const logoutAction = createAsyncThunk(
  "logout/action",
  async ( thunkApi) => {
    try {
      const request = new ApiRequest();
      const response = await request.delete(`${localUrl}/users/logout`);
      return response;
    } catch (error:any) {
       return error.message
    //   return thunkApi.rejectWithValue(error);
    }
  }
);


 const logoutSlice = createSlice({
  name: "logout",
  initialState,
  reducers: {
    logout:(state) =>{
      state.data = {}
      state.token =""
      state.role = ""
      state.success = false
      localStorage.clear()
    }
  },
  extraReducers(builder) {
    builder.addCase(logoutAction.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(logoutAction.fulfilled, (state, {payload}) => {
      state.loading = false
      state.success = true
       state.data = payload
       state.token = payload && payload.token
       state.role = payload && payload.role,
       state.id = payload && payload.id as string
       state.business_id = payload && payload.business_id,
       state.name = payload && payload.name
    })
    builder.addCase(logoutAction.rejected, (state, payload) => {
        state.error = true;
        state.errorData = payload
    })
  },
});


export default logoutSlice.reducer