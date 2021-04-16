import { Component } from 'react'
import { connect } from 'react-redux'
import { Todo, fetchTodos } from '../actions'
import { StoreState } from '../reducers'

interface AppProps {
	todos: Todo[]
	fetchTodos(): any
}

class _App extends Component<AppProps> {
	render() {
		return <div>Hi There</div>
	}
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
	return { todos }
}

export const App = connect(mapStateToProps, { fetchTodos })(_App)
