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
    data: [] ,
    error: false,
    errorData:{}
  }


  
  // ACTION

  export const deleteUsersAction = createAsyncThunk(
    "deleteuser/action",
    async (id:number) => {
      try {
        const request = new ApiRequest();
        const response = await request.delete(`https://vc0e8cula8.execute-api.us-east-1.amazonaws.com/production/users/user/${id}`);
        return response;
      } catch (error:any) {
        return error.message
      }
    }
  );
  
  
   const deleteUsersSlice = createSlice({
    name: "deleteUsers",
    initialState,
    reducers: {
    },
    extraReducers(builder) {
      builder.addCase(deleteUsersAction.pending, (state, action) => {
        state.loading = true
      })
      builder.addCase(deleteUsersAction.fulfilled, (state, {payload}) => {
        state.loading = false
        state.success = true
         state.data = payload
      })
      builder.addCase(deleteUsersAction.rejected, (state, action) => {
          state.error = true;
          state.errorData = action.payload as Object
      })
    },
  });
  
  
  export default deleteUsersSlice.reducer