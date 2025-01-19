import { configureStore } from '@reduxjs/toolkit';
import glossaryReducer from './slices';

const store = configureStore({
  reducer: {
    glossary: glossaryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
