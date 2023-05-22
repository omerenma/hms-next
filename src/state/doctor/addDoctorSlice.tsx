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

  interface DoctorData {
    // name: string,
    email: string,
    sex: string,
    phone_no: string,
    dob: string,
    specialty: string
  }
  
  // ACTION

  export const addDoctorsAction = createAsyncThunk(
    "adddoctor/action",
    async (data: DoctorData, thunkApi) => {
      try {
        const request = new ApiRequest();
        const response = await request.post(
          "http://localhost:5000/doctors/add",
          data
        );
        
        return response;
      } catch (error:any) {
        //return error
        return thunkApi.rejectWithValue(error);
      }
    }
  );
  
  
   const addDoctorSlice = createSlice({
    name: "adddoctor",
    initialState,
    reducers: {
    },
    extraReducers(builder) {
      builder.addCase(addDoctorsAction.pending, (state, action) => {
        state.loading = true
      })
      builder.addCase(addDoctorsAction.fulfilled, (state, {payload}) => {
        state.loading = false
        state.success = true
         state.data = payload
         state.message = payload.message
      })
      builder.addCase(addDoctorsAction.rejected, (state, action) => {
          state.error = true;
          state.errorData = action.payload as Object
      })
    },
  });
  
  
  export default addDoctorSlice.reducer