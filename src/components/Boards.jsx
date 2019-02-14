import React from 'react';

const Boards = ({ onClick, active }) => (
  <button
     onClick={onClick}
     
     style={{
         marginLeft: '4px',
     }}
  >
   Button Boards <span>{ active }</span>
  </button>
)

export default Boards;