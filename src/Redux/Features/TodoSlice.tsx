import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface initialStateType {
  todo: TodoData[];
  isLoading: boolean;
  error: string;
}

const initialState: initialStateType = {
  todo: [],
  isLoading: false,
  error: "",
};

const url = import.meta.env.VITE_URL;

export const getReq = createAsyncThunk("todo/get", async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const postReq = createAsyncThunk(
  "todo/post",
  async (newData: TODO.postReq) => {
    try {
      const response = await axios.post(url, newData);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const TodoSlice = createSlice({
  name: "name",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // ! postReq
      .addCase(getReq.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getReq.fulfilled, (state, actions) => {
        state.todo = actions.payload;
        state.isLoading = false;
      })
      .addCase(getReq.rejected, (state, actions) => {
        state.isLoading = false;
        state.error = actions.error.message || "Invalid getReq";
      })
      // ! postReq
      .addCase(postReq.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postReq.fulfilled, (state, actions) => {
        state.todo = actions.payload;
        state.isLoading = false;
      })
      .addCase(postReq.rejected, (state, actions) => {
        state.isLoading = false;
        state.error = actions.error.message || "Invalid postReq";
      });
  },
});

export default TodoSlice.reducer;
