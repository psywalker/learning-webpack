import { connect } from 'react-redux'
import BoardsList from '../components/BoardsList/BoardsList'

const mapStateToProps = (state, ownProps) => 
{
    
    const listsIds = ownProps.listsIds;
    const tasksArr = state.tasks;
    const tasks = listsIds.map((id, i) => {
        for(let i = 0; i < tasksArr.length; i++) {
            if(id === tasksArr[i].id) return tasksArr[i]
        }
    })
    return { tasks }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: (id, name) => dispatch({ type: 'ADD_BOARD', id, name })
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardsList)
