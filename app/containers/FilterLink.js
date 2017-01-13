// FilterLink是一个容器组件，他需要一个UI组件来构造
import Link from '../components/Link'
import { setVivibilityFilter } from '../actions'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => {
        dispatch(setVivibilityFilter(ownProps.filter))
    }
})

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)

export default FilterLink