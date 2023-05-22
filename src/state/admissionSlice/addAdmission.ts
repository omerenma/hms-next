import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

import {ApiRequest} from '../../services/fetch'

const initialState = {
    loading: false,
    success: false,
    data: {} ,
    error: false,
    errorData:{}
    
  }

  interface admissionData {
    patients_id:string
    admission_date:string
    discharged_date: string
  }
  
  
  // ACTION

  export const addAdmissionAction = createAsyncThunk(
    "addAdmission/action",
    async (data: admissionData, thunkApi) => {
      try {
        const request = new ApiRequest();
        const response = await request.post(
          "http://localhost:5000/admission/add", data
        );
        
        return response;
      } catch (error:any) {
        //return error
        return thunkApi.rejectWithValue(error);
      }
    }
  );
  
  
   const addAdmissionSlice = createSlice({
    name: "addAdmission",
    initialState,
    reducers: {
    },
    extraReducers(builder) {
      builder.addCase(addAdmissionAction.pending, (state, action) => {
        state.loading = true
      })
      builder.addCase(addAdmissionAction.fulfilled, (state, {payload}) => {
        state.loading = false
        state.success = true
         state.data = payload
      })
      builder.addCase(addAdmissionAction.rejected, (state, action) => {
          state.error = true;
          state.errorData = action.payload as Object
      })
    },
  });
  
  
  export default addAdmissionSlice.reducer