import React, { Component } from 'react';
import BoardsList from '../BoardsList/BoardsList'
import './boards-wrapper.scss';

class Boards extends Component {

  constructor(props) {
    super(props);
    this.state = {
      addListForm: false,
    }
  } 

  openFormAddList = () => {
    this.setState({
      addListForm: !this.state.addListForm,
    }); 
  }

  render() {

    const { boards } = this.props;
    const { addListForm } = this.state;
    return (
      <div className="boards-wrapper">

        <div className="boards"> 
          {boards.map(board =>
            <BoardsList name={board.name} key={board.id} />
          )}
        </div>
    
        <div className="board-adding">
          { !addListForm && (<button className="board-adding__btn" onClick={this.openFormAddList}>+ Добавьте ещё одну колонку</button>)}
          { addListForm && (<form className="board-adding-form">
            <input className="board-adding-form__input" placeholder="Ввести заголовок списка" />
            <button className="board-adding-form__btn_add">Добавьте список</button>
            <button className="board-adding-form__btn_close" onClick={this.openFormAddList}>✖</button>
          </form>)}
        </div>
  
      </div>
    );
  }
}

export default Boards;