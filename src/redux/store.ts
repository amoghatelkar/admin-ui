import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./rootReducers";
import logger from 'redux-logger';
import thunk from 'redux-thunk';
const reducer = rootReducers;
export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger).concat(thunk)
});

