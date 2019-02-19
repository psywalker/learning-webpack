let nextTodoId = 5

export const addList = text => ({
  type: 'ADD_LIST',
  id: nextTodoId++,
  text
})

export const removeList = id => ({
    type: 'REMOVE_LIST',
    id: id,
  })