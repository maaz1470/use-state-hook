import {useState} from 'react'

function Todo() {
	const [todo,setTodo] = useState({
		title: '',
		description: ''
	});

	const handleChange = (e) => {
		const inputValue = e.target.value;
		setTodo({title: inputValue});
	}
	return (
		<>
			<p>{todo.title}</p>
			<textarea value={todo.title} onChange={handleChange} />
		</>
	)

}

export default Todo;

// function Todo(){

// 	const [todo, setTodo] = useState('');
// 	const [warning, setWarning] = useState('');

// 	const handleInput = (e) => {
// 		const inputValue = e.target.value;
// 		const updatedWarning = inputValue.includes('.js') ? 'You need to JavaScript skill to complete the task. Do you have it?' : null

// 		setTodo(inputValue)
// 		setWarning(updatedWarning)


// 	}

// 	return (
// 		<>
// 			<p>{todo}</p>
// 			<textarea onChange={handleInput} value={todo} />
// 			<hr />
// 			<p>{warning || 'Good Choice'}</p>
// 		</>
// 	)
// }
// export default Todo;