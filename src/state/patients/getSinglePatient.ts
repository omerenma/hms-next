import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

import {ApiRequest} from '../../services/fetch'
import { baseUrl, localUrl } from '../url/baseUrl';
interface Patients {
    id:number
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

  export const getSinglePatientsAction = createAsyncThunk(
    "getsinglepatients/action",
    async (id:any) => {
      //  const params =  JSON.parse(id)
      try {
        const request = new ApiRequest();
        const response:Patients = await request.getUserById(`${localUrl}/patient/`+id);
        return response;
      } catch (error:any) {
        return error.message
      }
    }
  );
  
  
   const getSinglePatientsSlice = createSlice({
    name: "getsinglepatients",
    initialState,
    reducers: {
    },
    extraReducers(builder) {
      builder.addCase(getSinglePatientsAction.pending, (state, action) => {
        state.loading = true
      })
      builder.addCase(getSinglePatientsAction.fulfilled, (state, {payload}) => {
        state.loading = false
        state.success = true
         state.data = payload
      })
      builder.addCase(getSinglePatientsAction.rejected, (state, action) => {
          state.error = true;
          state.errorData = action.payload as Object
      })
    },
  });
  
  
  export default getSinglePatientsSlice.reducer