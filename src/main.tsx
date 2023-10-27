import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import dropDownReducer from "./store/dropDownSlice";

const store = configureStore({
    reducer: {
        dropDown:dropDownReducer,
    },
})
ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>
)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
