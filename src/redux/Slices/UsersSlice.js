import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk('auth/login', async(values, thunkAPI) => {
  const {rejectWithValue} = thunkAPI;

  
  try {
    const response = await axios.get('users.json')
    const checkUser= await response.data.users.find((element)=>element.userName===values.userName&&element.password===values.password)

    localStorage.setItem('user',JSON.stringify(checkUser))

    return checkUser;
    

  } catch (error) {
    return rejectWithValue(error.message);
  }

})
export const logoutUser = createAsyncThunk('auth/login', async(_, thunkAPI) => {
  const {rejectWithValue} = thunkAPI;

  
  try {
    localStorage.removeItem('user')  

  } catch (error) {
    return rejectWithValue(error.message);
  }

})
const initialState = {
  usersData: {},
  loading: false,
  error: false,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
      [loginUser.pending]: (state, action) => {
        state.loading = true;
        state.error = null;
      },
      [loginUser.fulfilled]: (state, action) => {
        state.loading = false;
       state.usersData=action.payload
      },
      [loginUser.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      },
      [logoutUser.pending]: (state, action) => {
        state.loading = true;
        state.error = null;
      },
      [logoutUser.fulfilled]: (state, action) => {
        state.loading = false;
      //  state.usersData=action.payload
      },
      [logoutUser.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      },
  },
});

export default usersSlice.reducer;