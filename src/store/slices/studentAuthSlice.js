import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as studentAuthService from "../../services/studentAuthService";

const storedStudent = JSON.parse(localStorage.getItem("student"));
const storedToken = localStorage.getItem("studentToken");

const initialState = {
  student: storedStudent || null,
  token: storedToken || null,
  isAuthenticated: !!storedToken,
  loading: false,
  error: null,
};

export const studentLogin = createAsyncThunk(
  "studentAuth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await studentAuthService.login(credentials);
      return data;
    } catch (err) {
      return rejectWithValue(err.message || "Login failed");
    }
  }
);

export const checkStudentAuth = createAsyncThunk(
  "studentAuth/checkAuth",
  async (_, { rejectWithValue }) => {
    try {
      const data = await studentAuthService.getCurrentStudent();
      return data;
    } catch (err) {
      return rejectWithValue(err.message || "Not authenticated");
    }
  }
);

const studentAuthSlice = createSlice({
  name: "studentAuth",
  initialState,
  reducers: {
    studentLogout: (state) => {
      state.student = null;
      state.token = null;
      state.isAuthenticated = false;
      state.error = null;
      localStorage.removeItem("studentToken");
      localStorage.removeItem("student");
      studentAuthService.logout();
    },
    clearStudentError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(studentLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(studentLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.student = action.payload.student;
        state.token = action.payload.token;
        state.isAuthenticated = true;
      })
      .addCase(studentLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(checkStudentAuth.pending, (state) => {
        state.loading = true;
      })
      .addCase(checkStudentAuth.fulfilled, (state, action) => {
        state.loading = false;
        state.student = action.payload.student;
        state.token = action.payload.token;
        state.isAuthenticated = true;
      })
      .addCase(checkStudentAuth.rejected, (state) => {
        state.loading = false;
        state.student = null;
        state.token = null;
        state.isAuthenticated = false;
        localStorage.removeItem("studentToken");
        localStorage.removeItem("student");
      });
  },
});

export const { studentLogout, clearStudentError } = studentAuthSlice.actions;
export default studentAuthSlice.reducer;
