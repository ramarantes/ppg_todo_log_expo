import constants from '../const'
import _ from 'lodash'

// let startState = JSON.parse(localStorage.getItem("todolocalStorage"));
// if(startState == null || startState=="") startState = []
let startState = [{id:1, todo:'vai teia', completed:false}];

export default (state = startState, action) => {
    let newState;
    switch(action.type){
        case constants.ADD_TODO:
            let id = (state.length > 0 ? _.last(_.orderBy(state,'id')).id : 1) + 1;
            newState = [...state,{id, todo:action.payload, completed:false}];
            break;
        case constants.TOGGLE_TODO:
            newState =  state.map(p => p.id === action.payload ? {...p,completed:!p.completed} : p);
            break;
        case constants.DROP_TODO:
            newState =  _.filter(state,o => o.id != action.payload);
            break;
        default:
        newState = state;
    }
    // localStorage.setItem("todolocalStorage", JSON.stringify(newState));
    return newState;
}
