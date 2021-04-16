import { Component } from 'react'
import { connect } from 'react-redux'
import { deleteTodo, fetchTodos, Todo } from '../actions'
import { StoreState } from '../reducers'

interface AppProps {
	todos: Todo[]
	fetchTodos(): any
	deleteTodo(id: number): any
}

class _App extends Component<AppProps> {
	handleFetch = (): void => {
		this.props.fetchTodos()
	}

	handleDelete(id: number) {
		this.props.deleteTodo(id)
	}

	renderList(): JSX.Element[] {
		return this.props.todos.map((todo: Todo) => (
			<li key={todo.id} onClick={() => this.handleDelete(todo.id)}>
				{todo.title}
			</li>
		))
	}

	render() {
		return (
			<div>
				<button onClick={this.handleFetch}>Fetch</button>
				<ul>{this.renderList()}</ul>
			</div>
		)
	}
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
	return { todos }
}

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App)
