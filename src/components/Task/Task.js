import React, { Component } from 'react';
import ClickOutside from 'react-click-outside';
import './tasks.scss';

class Task extends Component {

  constructor(props) {
    super(props);
    this.state = {
      taskEditBtnShow: false,
    }
  } 

  taskMenuHide = () => {
    this.setState({ taskEditBtnShow: false });
  };

  taskMenuToggle = () => {
    const { taskEditBtnShow } = this.state;
    this.setState({ taskEditBtnShow: !taskEditBtnShow });
  };  

  render() {

    const { id, text, listId } = this.props;
    const { taskEditBtnShow } = this.state;
    return (
      <div className="task">
        <button className={'task__edit-btn ' + (taskEditBtnShow ? 'task__edit-btn_show' : '')} onClick={this.taskMenuToggle}>
          <span><i className="fas fa-pen"></i></span>
        </button>
        
        <h2 className="task__title">{id}: {text}</h2>

        <ClickOutside className="clickOutSide" onClickOutside={this.taskMenuHide}>
        { taskEditBtnShow && (<div className="task-menu-wrapper">

            <div className="task-menu-wrapper__fade" onClick={this.taskMenuToggle}></div>

            <div className="task-menu-wrapper__inner">

              <div className="task-menu-fields">
                <textarea className="task-menu-fields__textarea"></textarea>
                <button className="task-menu-fields__btn">Сохранить</button>
              </div>

              <ul className="task-menu">
                <li className="task-menu__item">
                  <button className="task-menu-fields__btn">
                    <i class="far fa-file-archive"></i>
                    Архивировать
                  </button>
                </li>
              </ul>

            </div>
          </div>)}
        </ClickOutside>
      </div>
    );
  }
}

export default Task;