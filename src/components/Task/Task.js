import React, { Component } from 'react';

const Task = ({ name, id }) => (
  <div className="task">
      <h2 className="task__title">{id}: {name}</h2>
  </div>
)

export default Task;