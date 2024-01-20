import { combineReducers } from "@reduxjs/toolkit";

import {budget, userPreferences } from "ducks";

const rootReducer = combineReducers({
  budget: budget.reducer,
  userPreferences: userPreferences.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
