import { connect } from 'react-redux'
import Boards from '../components/Boards.jsx'

const mapStateToProps = (state, ownProps) => ({
  /*active: {
      state,
      ownProps,
  }*/
  active: 'text'
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => {
        console.log('1:::', dispatch)
        console.log('1:::', ownProps)
    }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Boards)
