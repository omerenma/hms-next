import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {ApiRequest} from '../../services/fetch'
import { baseUrl, localUrl } from '../url/baseUrl'
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
    id:"",
    error: false,
    errorData:{}
  }


  
  // ACTION

  export const getDoctorByIdAction = createAsyncThunk(
    "getSingleDoctors/action",
    async (id:string) => {
      try {
        const request = new ApiRequest();
        const response:Doctors = await request.getUsers(`${localUrl}/doctors/get/${id}`);
        return response;
      } catch (error:any) {
        return error.message
      }
    }
  );
  
  
   const getDoctorByIdSlice = createSlice({
    name: "getDoctors",
    initialState,
    reducers: {
    },
    extraReducers(builder) {
      builder.addCase(getDoctorByIdAction.pending, (state, action) => {
        state.loading = true
      })
      builder.addCase(getDoctorByIdAction.fulfilled, (state, {payload}) => {
        state.loading = false
        state.success = true
         state.data = payload,
         state.id = payload.id_doctor
      })
      builder.addCase(getDoctorByIdAction.rejected, (state, action) => {
          state.error = true;
          state.errorData = action.payload as Object
      })
    },
  });
  
  
  export default getDoctorByIdSlice.reducer