import { createStore } from "redux";
import { combineReducers } from "redux";
import counter from "../modules/counter";


// 1) rootReducer를 만들거에요 => combineReducer()
const rootReducer = combineReducers({
    counter : counter, 
}) // 객체가 input으로 들어감 


// 2) store를 생성할거에요 => createStore()
const store = createStore(rootReducer); // 이 함수는 더이상 유지보수 되지 않는 함수지만 현재 개념 공부상으로 필요함 -> 나중에 reduxToolkit의 configureStore로 대체

// 3) 만든 store를 내보낼 거에요
export default store; 