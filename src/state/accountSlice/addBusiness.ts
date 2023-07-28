import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

import {ApiRequest} from '../../services/fetch'
import { baseUrl , localUrl} from '../url/baseUrl';

interface AdminState {
    loading: boolean;
    success: boolean;
    data: {};
    error: false;
    errorData: {};
}

const initialState = {
    loading: false,
    success: false,
    data: {} ,
    message:"",
    error: false,
    errorData:{}
    
  }

  interface AddBusinessData {
    name:string;
    email: string;
    phone:string;
    address:string;
    password: string;
  }
  
  // ACTION

  export const addBusinessAction = createAsyncThunk(
    "addbusiness/action",
    async (data: AddBusinessData, thunkApi) => {
      try {
        const request = new ApiRequest();
        const response = await request.account_login(
          `${baseUrl}/business/add`,
          data
        );
        
        return response;
      } catch (error:any) {
        return thunkApi.rejectWithValue(error);
      }
    }
  );
  
  
   const addAdminSlice = createSlice({
    name: "addBusiness",
    initialState,
    reducers: {
    },
    extraReducers(builder) {
      builder.addCase(addBusinessAction.pending, (state, action) => {
        state.loading = true
      })
      builder.addCase(addBusinessAction.fulfilled, (state, {payload}) => {
        state.loading = false
        state.success = true
         state.data = payload
         state.message = payload.message
      })
      builder.addCase(addBusinessAction.rejected, (state, action) => {
          state.error = true;
          state.errorData = action.payload as Object
      })
    },
  });
  
  
  export default addAdminSlice.reducer