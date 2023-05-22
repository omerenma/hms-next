import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

import {ApiRequest} from '../../services/fetch'
import { useAppSeletor } from '@/src/store/hooks';

interface Users {
    name:string;
    email:string;
    role:string;
    id:string
}[]

const initialState = {
    loading: false,
    success: false,
    data: [] ,
    error: false,
    errorData:{}
  }


  
  // ACTION

  export const getUsersAction = createAsyncThunk(
    "getUsers/action",
    async () => {
      try {
        const request = new ApiRequest();
        const response = await request.getUsers("http://localhost:5000/users/getusers");
        return response
      } catch (error:any) {
        return error.message
      }
    }
  );
  
  
   const getUsersSlice = createSlice({
    name: "getUsers",
    initialState,
    reducers: {
    },
    extraReducers(builder) {
      builder.addCase(getUsersAction.pending, (state, action) => {
        state.loading = true
      })
      builder.addCase(getUsersAction.fulfilled, (state, {payload}) => {
        state.loading = false
        state.success = true
         state.data = payload
      })
      builder.addCase(getUsersAction.rejected, (state, action) => {
          state.error = true;
          state.errorData = action.payload as Object
      })
    },
  });
  
  
  export default getUsersSlice.reducer