// rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';

// Importa tus reductores individuales aquí
// import authenticationReducer from './reducers/authenticationReducer';
import authenticationReducer from '../presenters/authenticationSlice';

const rootReducer = combineReducers({
  // Agrega tus reductores individuales aquí
    authentication: authenticationReducer,

});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;