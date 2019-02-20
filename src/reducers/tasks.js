const tasks = (state = [], action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return [
          ...state,
          {
            id: state.length + 1,
            text: action.text,
          }
        ];
      case 'REMOVE_TASK':
        return state.filter(
            task => task.id !== action.taskId 
        );
      default:
        return state;
    }
  };
  
  export default tasks;