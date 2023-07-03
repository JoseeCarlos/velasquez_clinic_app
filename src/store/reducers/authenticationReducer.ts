import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthenticationState {
  isLoggedIn: boolean;
  user: User | null;
}

interface User {
  id: string;
  name: string;
  email: string;
}

const initialState: AuthenticationState = {
  isLoggedIn: false,
  user: null,
};

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const { login, logout } = authenticationSlice.actions;

export default authenticationSlice.reducer;