import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import { linksReducer } from "./modules/link/reducer";

const reducers = combineReducers({links: linksReducer})

export const store = configureStore({
    reducer: reducers
})