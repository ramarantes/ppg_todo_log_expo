import {combineReducers} from 'redux'
import todos from './todo'

export default combineReducers({todos})

// const keepStateStored = state => {
//     localStorage.setItem("lastname", "Smith");
// }