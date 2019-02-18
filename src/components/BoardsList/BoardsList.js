import React from 'react';
import Task from '../Task/Task'
import './board.scss';

const BoardsList = ({ name, tasks }) => (
    <div className="board boards__item">
        <h2 className="board__title">{name}</h2>
        <div className="tasks tasks-wrapper">
            {tasks.map((task, i) =>
                <Task key={i} name={task.name} id={task.id} />
            )}
        </div>
    </div>
)

export default BoardsList;