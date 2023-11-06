import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchCourseData from "../../database/courseData";

export const fetchData = createAsyncThunk("courses/fetchCourses", async () => {
  const { courseData } = await fetchCourseData(
    "https://example.com/api/courses"
  );

  return courseData;
});

const courseSlice = createSlice({
  name: "Courses",
  initialState: {
    status: "",
    error: null,
    courses: [],
    filteredCourses: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "Loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "Success";
        state.courses = action.payload;
      })
      .addCase(fetchData.rejected, (state) => {
        state.status = "Error";
      });
  },
});

export default courseSlice.reducer;
