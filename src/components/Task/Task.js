import React, { Component } from 'react';
import './tasks.scss';

class Task extends Component {

  constructor(props) {
    super(props);
    this.state = {
      taskEditBtnShow: false,
    }
  } 

  handleBtnMenuToogle = () => {
    this.setState({
      taskEditBtnShow: !this.state.taskEditBtnShow,
    }); 
}

  render() {

    const { id, name } = this.props;
    const { taskEditBtnShow } = this.state;
    return (
      <div className="task">
        <button className={'task__edit-btn ' + (taskEditBtnShow ? 'task__edit-btn_show' : '')} onClick={this.handleBtnMenuToogle}>
          <span><i class="fas fa-pen"></i></span>
        </button>
        
        <h2 className="task__title">{id}: {name}</h2>
      </div>
    );
  }
}

export default Task;