import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { signInUser } from "../usecases/AuthenticationUseCase";

interface AuthenticationState {
    loading: boolean;
    loggedIn: boolean;
    error: string | null;
  }
  
  const initialState: AuthenticationState = {
    loading: false,
    loggedIn: false,
    error: null,
  };
  
  export const signInWithEmailAndPassword = createAsyncThunk(
    'authentication/signInWithEmailAndPassword',
    async ({ email, password }: { email: string; password: string }, thunkAPI) => {
        console.log('Iniciando sesión con:', email, password);
      try {
        await signInUser(email, password);
        console.log('Inicio de sesión exitoso');
        return true;
      } catch (error) {
        console.log('Error al iniciar sesión:', error);
        return thunkAPI.rejectWithValue((error as Error).message);
      }
    }
  );
  
  const authenticationSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(signInWithEmailAndPassword.pending, (state) => {
          state.loading = true;
          state.loading = false;
          state.error = null;
        })
        .addCase(signInWithEmailAndPassword.fulfilled, (state) => {
          state.loading = false;
          state.loggedIn = true;
          state.error = null;
        })
        .addCase(signInWithEmailAndPassword.rejected, (state, action) => {
          state.loading = false;
          state.loggedIn = false;
          state.error = action.error as string;
        });
    },
  });
  
  export default authenticationSlice.reducer;
  
