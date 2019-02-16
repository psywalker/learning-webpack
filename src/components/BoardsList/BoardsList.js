import React from 'react';
import '../styles/app-styles.scss';

const BoardsList = ({ name }) => (
    <div className="board">
        <h2>{name}</h2>
    </div>
)

export default BoardsList;