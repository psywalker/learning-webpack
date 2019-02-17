import React from 'react';
import './board.scss';

const BoardsList = ({ name }) => (
    <div className="board boards__item">
        <h2 className="board__title">{name}</h2>
        <div className="tasks tasks-wrapper">

        </div>
    </div>
)

export default BoardsList;