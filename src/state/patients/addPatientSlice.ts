import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

import {ApiRequest} from '../../services/fetch'
import { baseUrl, localUrl } from '../url/baseUrl';
const initialState = {
    loading: false,
    success: false,
    data: {} ,
    message:"",
    error: false,
    errorData:{}
    
  }

  interface patientData {
    name:string;
    email: string;
    sex:string;
    dob:string;
    residential_address:string;
    phone_no:string;
    next_of_kin_name:string;
    next_of_kin_phone:string
  }
  
  
  // ACTION

  export const addPatientAction = createAsyncThunk(
    "add/action",
    async (data: patientData, thunkApi) => {
      try {
        const request = new ApiRequest();
        const response = await request.post(
          `${localUrl}/patient/add`, data
        );
        
        return response;
      } catch (error:any) {
        //return error
        return thunkApi.rejectWithValue(error);
      }
    }
  );
  
  
   const addPatientSlice = createSlice({
    name: "addPatients",
    initialState,
    reducers: {
    },
    extraReducers(builder) {
      builder.addCase(addPatientAction.pending, (state, action) => {
        state.loading = true
      })
      builder.addCase(addPatientAction.fulfilled, (state, {payload}) => {
        state.loading = false
        state.success = true
         state.data = payload
         state.message = payload.message
      })
      builder.addCase(addPatientAction.rejected, (state, action) => {
          state.error = true;
          state.errorData = action.payload as Object
      })
    },
  });
  
  
  export default addPatientSlice.reducer