import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

import {ApiRequest} from '../../services/fetch'
import { baseUrl , localUrl} from '../url/baseUrl';

const initialState = {
    loading: false,
    success: false,
    data: {} ,
    message:"",
    error: false,
    errorData:{}
    
  }

  interface AddEnquiry {
    name:string;
    email:string;
    message: string;
  }
  
  // ACTION

  export const doctorRemarkAction = createAsyncThunk(
    "enquiry/action",
    async (data: AddEnquiry, thunkApi) => {
      try {
        const request = new ApiRequest();
        const response = await request.post(`${localUrl}/adddoctorremark/add`, data);
        
        return response;
      } catch (error:any) {
        //return error
        return thunkApi.rejectWithValue(error);
      }
    }
  );
  
  
   const addAddEnquirySlice = createSlice({
    name: "enquiry",
    initialState,
    reducers: {
    },
    extraReducers(builder) {
      builder.addCase(doctorRemarkAction.pending, (state, action) => {
        state.loading = true
      })
      builder.addCase(doctorRemarkAction.fulfilled, (state, {payload}) => {
        state.loading = false
        state.success = true
         state.data = payload
         state.message = payload.message as string
      })
      builder.addCase(doctorRemarkAction.rejected, (state, action) => {
          state.error = true;
          state.errorData = action.payload as Object
      })
    },
  });
  
  
  export default addAddEnquirySlice.reducer