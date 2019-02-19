const lists = (state = [], action) => {
  switch (action.type) {
    case 'ADD_LIST':
      return [
        {
          id: 444,
          name: '333',
          tasksId: [],
        }
      ];
    case 'REMOVE_LIST':
      return state.filter(
        list => list.id === action.id ? { ...list } : list
      );
    default:
      return state;
  }
};

export default lists;