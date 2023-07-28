import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

import {ApiRequest} from '../../services/fetch'
import { baseUrl, localUrl } from '../url/baseUrl';


const initialState = {
    loading: false,
    success: false,
    data: [] ,
    id:'',
    error: false,
    errorData:{}
  }


  
  // ACTION

  export const getAppointmentsByIdAction = createAsyncThunk(
    "getSingleAppointment/action",
    async (id:number) => {
      try {
        const request = new ApiRequest();
        const response = await request.getUsers(`${localUrl}/appointment/get/${id}`);
        return response;
      } catch (error:any) {
        return error.message
      }
    }
  );
  
  
   const getAppointmentByIdSlice = createSlice({
    name: "getSingleAppointment",
    initialState,
    reducers: {
    },
    extraReducers(builder) {
      builder.addCase(getAppointmentsByIdAction.pending, (state, action) => {
        state.loading = true
      })
      builder.addCase(getAppointmentsByIdAction.fulfilled, (state, action) => {
        state.loading = false
        state.success = true
         state.data = action.payload
         state.id = action.payload.id
      })
      builder.addCase(getAppointmentsByIdAction.rejected, (state, action) => {
          state.error = true;
          state.errorData = action.payload as Object
      })
    },
  });
  
  
  export default getAppointmentByIdSlice.reducer