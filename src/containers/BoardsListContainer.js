import { connect } from 'react-redux'
import BoardsList from '../components/BoardsList/BoardsList'

const mapStateToProps = (state, ownProps) => 
{
    const list = state.lists.filter((list, i) => {
        return ownProps.listsId == list.id;
    })

    const name = list[0].name;
    const listsIds = list[0].tasksId;
    const listId = list[0].id;
    const tasksArr = state.tasks;
    const tasks = listsIds.map((id, i) => {
        for(let i = 0; i < tasksArr.length; i++) {
            if(id === tasksArr[i].id) return tasksArr[i]
        }
    })

    return { tasks, name, listId }
    
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: (id, name) => dispatch({ type: 'ADD_BOARD', id, name })
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardsList)
