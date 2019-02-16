import React from 'react';

const Boards = ({ boards, onClick }) => (
  <ul>
    {boards.map((board, i) =>
     <li key={i} onClick={() => onClick(boards.length + 1, 'board' + (boards.length+1))}>
       ID: {board.id} - Name: {board.name}
     </li>
    )}
  </ul>
)

export default Boards;