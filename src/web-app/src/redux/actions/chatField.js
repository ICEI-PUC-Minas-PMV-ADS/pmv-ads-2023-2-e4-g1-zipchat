
let nextTodoId = 0

export const addTodo = (content) => ({
  type: 'ADD_AWNSER',
  payload: {
    message: content
  },
})