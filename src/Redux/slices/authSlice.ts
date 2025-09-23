import { createSlice } from "@reduxjs/toolkit";

export type TAuthState = {
  user: string | null;
  token: string | null;
  loading: boolean;
  error: string | null;
};

const initialState: TAuthState = {
  user: null,
  token: null,   // ✅ keep empty at start
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.loading = false;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.loading = false;
      state.error = null;
    },
    addtocart:(state,action)=>{
      
    }
  },
});

export const { logout, loginSuccess } = authSlice.actions;
export const authReducer = authSlice.reducer;
