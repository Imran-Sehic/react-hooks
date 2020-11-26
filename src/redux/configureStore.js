import { combineReducers, createStore } from "redux";
import todosItems from "./ducks/todosItems";

const reducer = combineReducers({
    todosItems
});

const store = createStore(reducer);

export default store;
