import { combineReducers } from 'redux';
import boards from './boards'
import lists from './lists'
import tasks from './tasks'

const BoardsObj = combineReducers({
  boards,
  lists,
  tasks,
});

export default BoardsObj;
