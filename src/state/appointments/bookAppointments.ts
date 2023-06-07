import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

import {ApiRequest} from '../../services/fetch'

interface AdminState {
    loading: boolean;
    success: boolean;
    data: {};
    error: false;
    errorData: {};
}

const initialState = {
    loading: false,
    success: false,
    data: {} ,
    message:"",
    error: false,
    errorData:{}
    
  }

  interface AppointmentData {
    patient_id:string;
    doctor_id: string;
    appointment_date:string;
  }
  
  // ACTION

  export const bookAppointmentsAction = createAsyncThunk(
    "bookAppointment/action",
    async (data: AppointmentData, thunkApi) => {
      try {
        const request = new ApiRequest();
        const response = await request.post(
          "https://vc0e8cula8.execute-api.us-east-1.amazonaws.com/production/book_appointments/book",
          data
        );
        
        return response;
      } catch (error:any) {
        //return error
        return thunkApi.rejectWithValue(error);
      }
    }
  );
  
  
   const bookAppointmentSlice = createSlice({
    name: "bookAppointment",
    initialState,
    reducers: {
    },
    extraReducers(builder) {
      builder.addCase(bookAppointmentsAction.pending, (state, action) => {
        state.loading = true
      })
      builder.addCase(bookAppointmentsAction.fulfilled, (state, {payload}) => {
        state.loading = false
        state.success = true
         state.data = payload
         state.message = payload.message
      })
      builder.addCase(bookAppointmentsAction.rejected, (state, action) => {
          state.error = true;
          state.errorData = action.payload as Object
      })
    },
  });
  
  
  export default bookAppointmentSlice.reducer