import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

import {ApiRequest} from '../../services/fetch'
import { useAppSeletor } from '@/src/store/hooks';

interface Patients {
    name:string;
    email:string;
    dob:string;
    sex:string;
    date:[];
    phone_no:string;
    residential_address:string;
    next_of_kin_name:string;
    next_of_kin_phone_no:string;
}

const initialState = {
    loading: false,
    success: false,
    data: [] ,
    error: false,
    errorData:{}
  }


  
  // ACTION

  export const getPatientsAction = createAsyncThunk(
    "getpatients/action",
    async () => {
      try {
        const request = new ApiRequest();
        const response:Patients = await request.getUsers("http://localhost:5000/patient/");
        return response;
      } catch (error:any) {
        return error.message
      }
    }
  );
  
  
   const getPatientsSlice = createSlice({
    name: "getpatients",
    initialState,
    reducers: {
    },
    extraReducers(builder) {
      builder.addCase(getPatientsAction.pending, (state, action) => {
        state.loading = true
      })
      builder.addCase(getPatientsAction.fulfilled, (state, {payload}) => {
        state.loading = false
        state.success = true
         state.data = payload
      })
      builder.addCase(getPatientsAction.rejected, (state, action) => {
          state.error = true;
          state.errorData = action.payload as Object
      })
    },
  });
  
  
  export default getPatientsSlice.reducer