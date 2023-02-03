import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userSlice from '../features/user/user-slice'

import { apiSlice } from "../features/user/apiSlice";
import { apiProductSlice } from "../features/user/apiProductSlice";
import { apiUserSlice } from "../features/user/apiUserSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]:apiSlice.reducer,
    [apiProductSlice.reducerPath]:apiProductSlice.reducer,
    [apiUserSlice.reducerPath]:apiUserSlice.reducer,
    user: userSlice,
  },
  middleware:getDefaultMiddleware=>getDefaultMiddleware().concat(apiSlice.middleware,apiProductSlice.middleware,apiUserSlice.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;