import { connectWithReducer } from 'redux-next'
import { setVisibilityFilter } from '../actions'
import { default as visibilityFilterReducer } from '../reducers/visibilityFilter'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setVisibilityFilter(ownProps.filter))
  }
})

const FilterLink = connectWithReducer(
  visibilityFilterReducer,
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink
