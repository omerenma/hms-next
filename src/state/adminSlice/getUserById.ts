import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

import {ApiRequest} from '../../services/fetch'
import { useAppSeletor } from '@/src/store/hooks';

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
    data: [] ,
    id:'',
    error: false,
    errorData:{}
  }


  
  // ACTION

  export const getUserByIdAction = createAsyncThunk(
    "getSingleUser/action",
    async (id:number) => {
      try {
        const request = new ApiRequest();
        const response = await request.getUsers(`https://vc0e8cula8.execute-api.us-east-1.amazonaws.com/production/users/getuser/${id}`);
        return response;
      } catch (error:any) {
        return error.message
      }
    }
  );
  
  
   const getUserByIdSlice = createSlice({
    name: "getSingleUser",
    initialState,
    reducers: {
    },
    extraReducers(builder) {
      builder.addCase(getUserByIdAction.pending, (state, action) => {
        state.loading = true
      })
      builder.addCase(getUserByIdAction.fulfilled, (state, action) => {
        state.loading = false
        state.success = true
         state.data = action.payload
         state.id = action.payload.id
      })
      builder.addCase(getUserByIdAction.rejected, (state, action) => {
          state.error = true;
          state.errorData = action.payload as Object
      })
    },
  });
  
  
  export default getUserByIdSlice.reducer