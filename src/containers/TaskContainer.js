import { connect } from 'react-redux'
import Task from '../components/Task/Task'
import { removeList } from '../actions'

const mapStateToProps = (state, ownProps) => 
{
    //console.log('1::', state)
    return { id: ownProps.id, text: ownProps.text, listId: ownProps.listId }
    
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    removeList: id => dispatch(removeList(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Task)
