const tasks = (state = [], action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return [
          ...state,
          {
            id: action.id,
            name: action.name,
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