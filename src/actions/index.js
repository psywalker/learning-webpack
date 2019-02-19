let nextTodoId = 5

export const addList = text => ({
  type: 'ADD_LIST',
  id: nextTodoId++,
  text
})