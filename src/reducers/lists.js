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
      return state.filter(list => list.id != action.id);
    case 'ADD_TASK':

      let taskId = 1;

      for(let i = 0; i < state.length; i++) taskId += state[i].tasksId.length; 

      return state.map(list =>
        (list.id === action.listId) 
        ? {...list, tasksId: [...list.tasksId, taskId]} 
        : list                                                                                                             
      )
    case 'REMOVE_TASK':
      return state.map(list =>
        (list.id === action.listId) 
        ? {...list, tasksId: list.tasksId.filter(task => task !== action.taskId)} 
        : list                                                                                                             
      )
    default:
      return state;
  }
};

export default lists;