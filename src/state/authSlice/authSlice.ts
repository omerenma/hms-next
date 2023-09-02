'use client'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ApiRequest } from "../../services/fetch";
import { baseUrl , localUrl} from "../url/baseUrl";
import axios from "axios";
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
  accessToken:"",
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

// ACTION
export const loginAction = createAsyncThunk(
  "login/action",
  async (data: Data, thunkApi) => {
    try {
      const request = new ApiRequest();
      const response = await request.account_login(
        `${baseUrl}/users/signin`,
        data
      );
      localStorage.setItem('role', response && response.role)
      localStorage.setItem('business_id', response && response.business_id)
      return response;
    } catch (error:any) {
      //  return error.message
      return thunkApi.rejectWithValue(error);
    }
  }
);


 const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logout:(state) =>{
      axios.delete(`${localUrl}/users/logout`)
      .then(response => {
        // @ts-ignore
        if(response.payload === 'Logout success'){
          state.data = {}
          state.role = ""
          state.business_id = "",
          state.name = ''
          state.id = ""
          localStorage.clear()
        }
      })
    
    }
  },
  extraReducers(builder) {
    builder.addCase(loginAction.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(loginAction.fulfilled, (state, {payload}) => {
      state.loading = false
      state.success = true
       state.data = payload
       state.role = payload && payload.role
       state.id = payload && payload.id as string
       state.business_id = payload && payload.business_id,
       state.name = payload && payload.name
    })
    builder.addCase(loginAction.rejected, (state, payload) => {
        state.error = true;
        state.errorData = payload
    })
  },
});

export const {logout} = loginSlice.actions

export default loginSlice.reducer