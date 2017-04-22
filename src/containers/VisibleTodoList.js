import { connectWithReducer } from 'redux-next'
import { toggleTodo } from '../actions'
import { default as todosReducer } from '../reducers/todos'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = {
  onTodoClick: toggleTodo
}

const VisibleTodoList = connectWithReducer(
  todosReducer,
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
