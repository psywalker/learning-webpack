import React from 'react';
import BoardsList from '../BoardsList/BoardsList'

const Boards = ({ boards }) => (
  <div className="boards-wrapper">
    {boards.map(board =>
      <BoardsList name={board.name} key={board.id} />
    )}
</div>
)

export default Boards;