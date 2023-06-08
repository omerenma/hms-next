import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

import {ApiRequest} from '../../services/fetch'
import { baseUrl } from '../adminSlice/url/baseUrl'
interface Appointments {
   
}[]

const initialState = {
    loading: false,
    success: false,
    data: [] ,
    error: false,
    errorData:{}
  }


  
  // ACTION

  export const getAppointmentsAction = createAsyncThunk(
    "getadmissions/action",
    async () => {
      try {
        const request = new ApiRequest();
        const response:Appointments = await request.getUsers(`${baseUrl}/book_appointments/getappointments`);
        return response;
      } catch (error:any) {
        return error.message
      }
    }
  );
  
  
   const getAppointmentsSlice = createSlice({
    name: "getappointments",
    initialState,
    reducers: {
    },
    extraReducers(builder) {
      builder.addCase(getAppointmentsAction.pending, (state, action) => {
        state.loading = true
      })
      builder.addCase(getAppointmentsAction.fulfilled, (state, {payload}) => {
        state.loading = false
        state.success = true
         state.data = payload
      })
      builder.addCase(getAppointmentsAction.rejected, (state, action) => {
          state.error = true;
          state.errorData = action.payload as Object
      })
    },
  });
  
  
  export default getAppointmentsSlice.reducer