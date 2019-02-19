import React, { Component } from 'react';
import TaskContainer from '../../containers/TaskContainer'
import './board.scss';
import '../Task/tasks.scss';

class BoardsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            addTaskFormToggle: false,
            boardMenuToggle: false,
            boardMenuOpenToggle: false,
        }
    } 

    openFormRemoveList = () => {
        this.setState({
            addTaskFormToggle: !this.state.addTaskFormToggle,
        }); 
    }

    handleBtnMenuToogle = () => {
        this.setState({
            boardMenuOpenToggle: !this.state.boardMenuOpenToggle,
            boardMenuToggle: !this.state.boardMenuToggle,
        }); 
    }

    render() {

        const { name, tasks, removeList, listId } = this.props;
        const { addTaskFormToggle, boardMenuToggle, boardMenuOpenToggle } = this.state;
        return (
            <div className="board boards__item">

                <button className={'board__menu-toggle ' + (boardMenuOpenToggle ? 'board__menu-toggle_open' : '')} onClick={this.handleBtnMenuToogle}>
                    <span>...</span>
                </button>

                { boardMenuToggle && (<div className="board-menu-wrapper">
                    <button className="board-menu-wrapper__close" onClick={this.handleBtnMenuToogle}>✕</button>
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

                <h2 className="board__title">{name}</h2>

                <div className="tasks tasks-wrapper">
                    <div className="tasks-wrapper__inner">
                        {tasks.map((task, i) =>
                            <TaskContainer key={i} name={task.name} id={task.id} listId={listId} />
                        )}
                    </div>
                </div>

                <div className="task-adding">
                    { !addTaskFormToggle && (<button className="task-adding__btn" onClick={this.openFormRemoveList}>
                            <span className="task-adding__btn_plus">+</span> <span className="task-adding__btn_text">Добавьте ещё одну карточку</span>
                        </button>)}
                    { addTaskFormToggle && (<div className="task-adding-form">
                        <textarea className="task-adding-form__input" placeholder="Ввести заголовок для этой карточки"></textarea>
                        <button className="task-adding-form__btn_add">Добавьте карточку</button>
                        <button className="task-adding-form__btn_close" onClick={this.openFormRemoveList}>✖</button>
                    </div>)}
                </div>
            </div>
        );
    }
}

export default BoardsList;