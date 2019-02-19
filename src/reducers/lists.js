const lists = (state = [], action) => {
  switch (action.type) {
    case 'ADD_LIST':
      return [
        ...state,
        {
          id: action.id,
          name: action.text,
          tasksId: [],
        }
      ];
    case 'REMOVE_LIST':
      return state.filter(
        list => list.id != action.id 
      );
    case 'ADD_TASK':
      let taskId = 1;
      for(let i = 0; i < state.length; i++) taskId += state[i].tasksId.length;
      
      for(let i = 0; i < state.length; i++) {
        if(state[i].id == action.listId) {
          state[i].tasksId.push(taskId);
        }
      }
    case 'REMOVE_TASK':
      
    default:
      return state;
  }
};

export default lists;