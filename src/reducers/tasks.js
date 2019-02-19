const tasks = (state = [], action) => {
    switch (action.type) {
      case 'ADD_TASK':
        let taskId = state.length + 1;
        return [
          ...state,
          {
            id: taskId,
            text: action.text,
          }
        ];
      case 'REMOVE_TASK':
        return state.filter(
            task => task.id === action.id ? { ...task } : task
        );
      default:
        return state;
    }
  };
  
  export default tasks;