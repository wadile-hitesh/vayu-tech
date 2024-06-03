import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface AuthState {
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  isAuthenticated: false,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthStatus : (state,actions)=>{
      state.isAuthenticated = actions.payload;
    }
  }
});

export const { setAuthStatus } = authSlice.actions;


export default authSlice.reducer;