const lists = (state = [], action) => {
  switch (action.type) {
    case 'ADD_LIST':
      return [
        ...state,
        {
          id: action.id,
          text: action.name,
        }
      ];
    case 'REMOVE_LIST':
      return state.lists.map(
        list => list.id === action.id ? { ...list } : list
      );
    default:
      return state;
  }
};

export default lists;