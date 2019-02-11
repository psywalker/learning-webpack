const boards = (state = [], action) => {
  switch (action.type) {
    case 'ADD_BOARD':
      return [
        ...state,
        {
          id: action.id,
          text: action.name,
        }
      ];
    case 'REMOVE_BOARD':
      return state.boards.map(
        board => board.id === action.id ? { ...board } : board
      );
    default:
      return state;
  }
};

export default boards;
