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
    next_of_kin_phone:string;
    id:any
  }
  
  
  // ACTION

  export const editPatientAction = createAsyncThunk(
    "editpatient/action",
    async (data: patientData, thunkApi) => {
      try {
        const params =  JSON.parse(data.id)
        const request = new ApiRequest();
        const response = await request.edit(
          `${localUrl}/patient/`+params, data
        );
        
        return response;
      } catch (error:any) {
        //return error
        return thunkApi.rejectWithValue(error);
      }
    }
  );
  
  
   const editPatientSlice = createSlice({
    name: "editPatients",
    initialState,
    reducers: {
    },
    extraReducers(builder) {
      builder.addCase(editPatientAction.pending, (state, action) => {
        state.loading = true
      })
      builder.addCase(editPatientAction.fulfilled, (state, {payload}) => {
        state.loading = false
        state.success = true
         state.data = payload
         state.message = payload.message
      })
      builder.addCase(editPatientAction.rejected, (state, action) => {
          state.error = true;
          state.errorData = action.payload as Object
      })
    },
  });
  
  
  export default editPatientSlice.reducer