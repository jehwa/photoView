import { connect } from 'react-redux'
import TodoList from '../component/TodoList.jsx'
import { toggleTodo } from '../actions'

const mapStateToProps = state => ({
  todos: state
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(TodoList)