import React from 'react'

export default class TodoClass extends React.Component {
	state = {
		todo: '',
		warning: null
	}

	handleInput = (e) => {
		const inputValue = e.target.value;
		const warning = inputValue.includes('.js') ? 'You need to JavaScript skill to complete the task. Do you have it?' : null

		this.setState({
			todo: inputValue,
			warning: warning
		})


	}

	render(){
		const {todo, warning} = this.state;
		return (
			<>
				<p>{todo}</p>
				<textarea onChange={this.handleInput} value={todo} />
				<hr />
				<p>{warning || 'Good Choice'}</p>
			</>
		)
	}
}