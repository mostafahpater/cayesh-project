import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getNominee = createAsyncThunk('nominee/data', async(_, thunkAPI) => {
  const {rejectWithValue} = thunkAPI;

  
  try {
    const response = await axios.get('ballotData.json')
    console.log(response)
    return response;
    

  } catch (error) {
    return rejectWithValue(error.message);
  }

})
export const setNominee = createAsyncThunk('nominee/chosen', async(values, thunkAPI) => {
    const {rejectWithValue} = thunkAPI;
    try {
        console.log(values)
      return values; 
    } catch (error) {
      return rejectWithValue(error.message);
    }
  
  })


const initialState = {
  nomineeData: [],
  nomineechosen: [],
  loading: false,
  error: false,
};
const NomineeSlice = createSlice({
    name: "nominee",
    initialState,
    reducers: {},
    extraReducers: {
        [getNominee.pending]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [getNominee.fulfilled]: (state, action) => {
            state.loading = false;
            state.nomineeData=action.payload
        },
        [getNominee.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
        [setNominee.pending]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [setNominee.fulfilled]: (state, action) => {
            state.loading = false;
       state.nomineechosen=[...state.nomineechosen,action.payload]
      },
      [setNominee.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      },
  },
});

export default NomineeSlice.reducer;