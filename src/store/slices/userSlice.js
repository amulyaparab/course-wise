import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchCourseData from "../../database/courseData";

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  const { user } = await fetchCourseData("https://example.com/api/courses");
  return user;
});

const userSlice = createSlice({
  name: "User",
  initialState: {
    status: "",
    error: null,
    user: {},
  },
  reducers: {
    enrollToCourse: (state, action) => {
      state.user.enrolledCourses.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = "Loading";
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = "Success";
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = "Error";
        state.error = action.error.message;
      });
  },
});

export const { enrollToCourse } = userSlice.actions;
export default userSlice.reducer;
