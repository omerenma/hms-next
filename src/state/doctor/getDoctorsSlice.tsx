import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {ApiRequest} from '../../services/fetch'
import { baseUrl, localUrl } from '../adminSlice/url/baseUrl'
interface Doctors {
    name: string,
    email: string,
    sex: string,
    phone_no: string,
    dob: string,
    specialty: string
}[]

const initialState = {
    loading: false,
    success: false,
    data: [] ,
    error: false,
    errorData:{}
  }


  
  // ACTION

  export const getDoctorsAction = createAsyncThunk(
    "getDoctors/action",
    async () => {
      try {
        const request = new ApiRequest();
        const response:Doctors = await request.getUsers(`${localUrl}/doctors/get`);
        return response;
      } catch (error:any) {
        return error.message
      }
    }
  );
  
  
   const getDoctorsSlice = createSlice({
    name: "getDoctors",
    initialState,
    reducers: {
    },
    extraReducers(builder) {
      builder.addCase(getDoctorsAction.pending, (state, action) => {
        state.loading = true
      })
      builder.addCase(getDoctorsAction.fulfilled, (state, {payload}) => {
        state.loading = false
        state.success = true
         state.data = payload
      })
      builder.addCase(getDoctorsAction.rejected, (state, action) => {
          state.error = true;
          state.errorData = action.payload as Object
      })
    },
  });
  
  
  export default getDoctorsSlice.reducer