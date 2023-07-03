export interface RootState {
  authentication: AuthenticationState;
}

export interface AuthenticationState {
  isLoading: boolean;
  error: string | null;
}
