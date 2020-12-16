import { useState } from 'react'
import "./App.css"
function App () {
	
	const [todos, setTodos] = useState([])
	let [todoID, setTodoID] = useState(0);
	
	
	const createTodo = e => {
		
		if (e.keyCode === 13) {
			
			setTodoID(todoID => todoID + 1);
			
			let newTodo = {
				id: todoID,
				title: e.target.value.trim(),
				completed: false,
			}
			
			setTodos([...todos, newTodo])
			
			e.target.value = null
		}
	}
	
	const deleteTodo = (todo) => setTodos(todos.filter(t => t.id !== todo.id))
	const complateTodo = (todo) => {
		const copyTodos = [...todos];
		const findedTodo =	copyTodos.find(t  => t.id === todo.id);
		const indexTodo = copyTodos.indexOf(findedTodo);
		findedTodo.completed = !findedTodo.completed;
		copyTodos[indexTodo] = findedTodo;
		setTodos(copyTodos);
	};
	
	
	return (
		<>
		<input type="text" onKeyUp={createTodo}/>
		<ul>
		{
			todos.map(todo => {
				return (
					<li key={todo.id}>
					<span>{todo.title}</span>
					<button onClick={deleteTodo.bind(null, todo)}>X</button>
					<button onClick={complateTodo.bind(null, todo)} className={
						todo.completed ? "complated" : "uncomplated"
					} >{todo.completed ? "Complated" : "Uncomplated"}</button>
					</li>
					)
				})
			}
			</ul>
			
			</>
			)
		}
		
		export default App
		