import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

import {ApiRequest} from '../../services/fetch'
import { baseUrl , localUrl} from './url/baseUrl';

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

  interface AdminData {
    name:string;
    email: string;
    password: string;
    role:string;
  }
  
  // ACTION

  export const addAdminAction = createAsyncThunk(
    "admin/action",
    async (data: AdminData, thunkApi) => {
      try {
        const request = new ApiRequest();
        const response = await request.post(
          `${localUrl}/users/register`,
          data
        );
        
        return response;
      } catch (error:any) {
        //return error
        return thunkApi.rejectWithValue(error);
      }
    }
  );
  
  
   const addAdminSlice = createSlice({
    name: "addUser",
    initialState,
    reducers: {
    },
    extraReducers(builder) {
      builder.addCase(addAdminAction.pending, (state, action) => {
        state.loading = true
      })
      builder.addCase(addAdminAction.fulfilled, (state, {payload}) => {
        state.loading = false
        state.success = true
         state.data = payload
         state.message = payload.message
      })
      builder.addCase(addAdminAction.rejected, (state, action) => {
          state.error = true;
          state.errorData = action.payload as Object
      })
    },
  });
  
  
  export default addAdminSlice.reducer