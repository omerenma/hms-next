import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

import {ApiRequest} from '../../services/fetch'
import { useAppSeletor } from '@/src/store/hooks';

interface Admissions {
    admission_date:string;
    date:string;
    discharged_date:string;
    email:string;
    dob:string;
    id:string;
    name:string;
    sex:string;
    patients_id:string;
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

  export const getAdmissionsAction = createAsyncThunk(
    "getadmissions/action",
    async () => {
      try {
        const request = new ApiRequest();
        const response:Admissions = await request.getUsers("http://localhost:5000/admission/get");
        console.log(response)
        return response;
      } catch (error:any) {
        return error.message
      }
    }
  );
  
  
   const getAdmissionsSlice = createSlice({
    name: "getadmissions",
    initialState,
    reducers: {
    },
    extraReducers(builder) {
      builder.addCase(getAdmissionsAction.pending, (state, action) => {
        state.loading = true
      })
      builder.addCase(getAdmissionsAction.fulfilled, (state, {payload}) => {
        state.loading = false
        state.success = true
         state.data = payload
      })
      builder.addCase(getAdmissionsAction.rejected, (state, action) => {
          state.error = true;
          state.errorData = action.payload as Object
      })
    },
  });
  
  
  export default getAdmissionsSlice.reducer