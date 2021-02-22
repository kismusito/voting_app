import { combineReducers } from "redux";
import { candidateReducer } from "./cadidate.reducer";

export const rootReducer = combineReducers({ candidateReducer });
