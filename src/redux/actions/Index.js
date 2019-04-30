import constants from '../const'

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