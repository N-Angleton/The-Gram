import { combineReducers } from "redux";
import { entitiesReducer } from "./entities_reducer";
import { errorsReducer } from "./errors_reducer";
import { sessionReducer } from "./session_reducer";

export const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
});
