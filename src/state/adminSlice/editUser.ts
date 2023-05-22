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

  interface EditData {
      id:string;
    name:string;
    email: string;
    role:string;
  }
  
  // ACTION

  export const editUserAction = createAsyncThunk(
    "edit-user/action",
    async (data: EditData,  thunkApi) => {
      try {
        const request = new ApiRequest();
        const response = await request.edit(`http://localhost:5000/users/user`, data);
        
        return response;
      } catch (error:any) {
        //return error
        return thunkApi.rejectWithValue(error);
      }
    }
  );
  
  
   const addAdminSlice = createSlice({
    name: "edit-user",
    initialState,
    reducers: {
    },
    extraReducers(builder) {
      builder.addCase(editUserAction.pending, (state, action) => {
        state.loading = true
      })
      builder.addCase(editUserAction.fulfilled, (state, {payload}) => {
        state.loading = false
        state.success = true
         state.data = payload
         state.message = payload.message
      })
      builder.addCase(editUserAction.rejected, (state, action) => {
          state.error = true;
          state.errorData = action.payload as Object
      })
    },
  });
  
  
  export default addAdminSlice.reducer