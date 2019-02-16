import React from 'react';
import BoardsList from '../BoardsList/BoardsList'
import './boards-wrapper.scss';

const Boards = ({ boards }) => (
  <div className="boards-wrapper boards">
    {boards.map(board =>
      <BoardsList name={board.name} key={board.id} />
    )}
</div>
)

export default Boards;