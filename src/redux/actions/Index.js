import constants from '../const'
import {AsyncStorage} from 'react-native';

export const addtodo = form => ({
    type:constants.ADD_TODO,
    payload: form[0].value
})

export const toggleTodo = id => ({
    type:constants.TOGGLE_TODO,
    payload: id
})

export const dropTodo = id => ({
    type:constants.DROP_TODO,
    payload: id
})

export const loadTodoBase = () => {
    return dispatch => {
        AsyncStorage.getItem("todolocalStorage").then(
            p => {
                let x = JSON.parse(p);
                //x = [{id:1, todo:'vai teia', completed:false}];
                console.log(x);
                dispatch({
                    type:constants.LOAD_TODOBASE,
                    payload:x
                });
            }
        )
    }
}