import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ApiRequest } from "../../services/fetch";
import { baseUrl , localUrl} from "../adminSlice/url/baseUrl";
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
  token:"",
  role:"",
  error: false,
  errorData:{},
  id:""
  
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
export const loginAction = createAsyncThunk(
  "login/action",
  async (data: Data, thunkApi) => {
    try {
      const request = new ApiRequest();
      const response = await request.login(
        `${localUrl}/users/signin`,
        data
      );
      localStorage.setItem('token', response && response.token)
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
      state.data = {}
      state.token =""
      state.role = ""
      state.success = false
      localStorage.clear()
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
       state.token = payload && payload.token
       state.role = payload && payload.role,
       state.id = payload && payload.id as string
    })
    builder.addCase(loginAction.rejected, (state, payload) => {
        state.error = true;
        state.errorData = payload
    })
    // builder.addCase(loginAction.pending, (state, action) => {
    //     state.loading = true
    //     state.success = false
        
    // })
    // .addCase(loginAction.fulfilled, (state, action:PayloadAction<LoginResponse>) => {
    //     state.loading = false
    //     // state.success = true
    //     state.data = action.payload
    //     state.token = action.payload && action.payload.token
    //     state.role = action.payload && action.payload.role

    // })
    // .addCase(loginAction.rejected, (state, action:PayloadAction<any>) => {
    //   state.loading = false
    //   state.success = false
    //     state.error = true;
    //     state.data = {};
    //     state.errorData = action.payload

    // })
  },
});

export const {logout} = loginSlice.actions

export default loginSlice.reducer