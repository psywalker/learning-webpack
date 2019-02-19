import React, { Component } from 'react';
import ClickOutside from 'react-click-outside';
import TaskContainer from '../../containers/TaskContainer'
import './board.scss';
import '../Task/tasks.scss';

class BoardsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            boardMenuShow: false,
            addTaskFormShow: false,
        }
    } 

    boardMenuHide = () => {
        this.setState({ boardMenuShow: false });
    };
    
    boardMenuToggle = () => {
        const { boardMenuShow } = this.state;
        this.setState({ boardMenuShow: !boardMenuShow });
    };

    addTaskFormHide = () => {
        this.setState({ addTaskFormShow: false });
    };
    
    addTaskFormToggle = () => {
        const { addTaskFormShow } = this.state;
        this.setState({ addTaskFormShow: !addTaskFormShow });
    };

    render() {

        const { name, tasks, removeList, listId, addTask } = this.props;
        const { boardMenuShow, addTaskFormShow } = this.state;
        let textAreaTitle;
        return (
            <div className="board boards__item">
                <ClickOutside className="clickOutSide" onClickOutside={this.boardMenuHide}>
                    <button className={'board__menu-toggle ' + (boardMenuShow ? 'board__menu-toggle_open' : '')} onClick={this.boardMenuToggle}>
                        <span>...</span>
                    </button>

                    { boardMenuShow && (<div className="board-menu-wrapper">
                        <button className="board-menu-wrapper__close" onClick={this.boardMenuToggle}>✕</button>
                        <h2 className="board-menu-wrapper__title">Действие со списком</h2>   

                        <ul className="board-menu">
                            <li className="board-menu__item">
                                <button className="board-menu__link" onClick={(e) => {
                                    e.preventDefault;
                                    removeList(listId)}
                                    }>Архивировать список</button>
                            </li>
                        </ul>              
                    </div>)}
                </ClickOutside>
                <h2 className="board__title">{name}</h2>

                <div className="tasks tasks-wrapper">
                    <div className="tasks-wrapper__inner">
                        {tasks.map((task, i) => {
                           return <TaskContainer key={i} text={task.text} id={task.id} listId={listId} />
                        })}
                    </div>
                </div>

                <div className="task-adding">
                <ClickOutside className="clickOutSide" onClickOutside={this.addTaskFormHide}>
                    { !addTaskFormShow && (<button className="task-adding__btn" onClick={this.addTaskFormToggle}>
                            <span className="task-adding__btn_plus">+</span> <span className="task-adding__btn_text">Добавьте ещё одну карточку</span>
                        </button>)}
                    { addTaskFormShow && (<div className="task-adding-form">
                        <textarea ref={node => textAreaTitle = node} className="task-adding-form__input" placeholder="Ввести заголовок для этой карточки"></textarea>
                        <button className="task-adding-form__btn_add"onClick={(e) => {
                                e.preventDefault;
                                addTask(listId, textAreaTitle.value)}
                                }>Добавьте карточку</button>
                        <button className="task-adding-form__btn_close" onClick={this.addTaskFormToggle}>✖</button>
                    </div>)}
                    </ClickOutside>
                </div>
            </div>
        );
    }
}

export default BoardsList;