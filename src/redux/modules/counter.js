// reducer라는 함수를 만들겁니다. 이 함수는 state를 리턴합니다. 
// state를 리턴하기 위해서는 초기값이 필요합니다 (useState랑 같은 개념)
// initialState 로 초기 state를 잡아줍니다. 

const initialState = {
    number : 0,
} 
//reducer (변화를 일으키는 함수) / 변화의 종류는 action.type에 담길것 
// 리듀서 함수를 통해서 중앙 저장소에 있는 값을 변화시키는 작업을 할것임
// 어떤 변화를, 얼만큼의 변화를 일으킬 것인지 명시될 것 
const counter = (state=initialState, action)=>{ 
    switch (action.type) {
           
        default:
            return state;
    }
}
export default counter;