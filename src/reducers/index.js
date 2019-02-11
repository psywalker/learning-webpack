import { combineReducers } from 'redux';
import boards from './boards'
import lists from './lists'
import tasks from './tasks'
import initialStore from '../initialStore'

const BoardsObj = combineReducers({
  initialStore,
  boards,
  lists,
  tasks,
});

export default BoardsObj;
