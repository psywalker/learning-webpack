import React, { Component } from 'react';
import BoardsListContainer from '../../containers/BoardsListContainer'
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

    const { lists, addList } = this.props;
    const { addListForm } = this.state;
    let inputTitle;
    return (
      <div className="boards-wrapper">

        <div className="boards"> 
          {lists.map(list =>
            <BoardsListContainer listsId={list.id} key={list.id} />
          )}
        </div>
    
        <div className="board-adding">
          { !addListForm && (<button className="board-adding__btn" onClick={this.openFormAddList}>+ Добавьте ещё одну колонку</button>)}
          { addListForm && (<form className="board-adding-form">
            <input ref={node => inputTitle = node} className="board-adding-form__input" placeholder="Ввести заголовок списка" />
            <button className="board-adding-form__btn_add" onClick={() => addList(inputTitle.value)}>Добавьте список</button>
            <button className="board-adding-form__btn_close" onClick={this.openFormAddList}>✖</button>
          </form>)}
        </div>
  
      </div>
    );
  }
}

export default Boards;