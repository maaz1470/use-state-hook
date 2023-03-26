import {useState} from 'react'
export default function Counter(){
	const [count, setCount] = useState(0);
	let i = 0
	const addFive = () => {
		while(i < 5){
			setCount((prevState) => prevState + 1)
			i = i + 1
		}
	}
	return (
		<>
			<h1>{count}</h1>
			<button onClick={() => setCount((prevState) => prevState + 1)}>Add 1</button>
			<br />
			<br />
			<button onClick={() => setCount((prevState) => prevState + 5)}>Add 5</button>
		</>
	)
}