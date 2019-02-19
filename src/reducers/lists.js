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
    default:
      return state;
  }
};

export default lists;