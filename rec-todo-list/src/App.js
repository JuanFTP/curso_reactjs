import './App.css';
import { useState } from 'react';
import { atom, RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

function App() {
	return (
		<RecoilRoot>
			<div className="container">
				<h3>ToDo List</h3>
				<ItemCreator />
				<TodoList />
			</div>
		</RecoilRoot>
	);
};

let keyCount = 0;
const todoListState = atom({
	key: 'todoListState',
	default: []
});

function ItemCreator() {
	const [text, setText] = useState("");
	const setNewToDo = useSetRecoilState(todoListState);

	const onChangeText = (event) => {
		setText(event.target.value);
	};

	const onClick = () => {
		setNewToDo(oldTodoList => {
			return ([
				...oldTodoList, {
					id: (keyCount++), text, isCompleted: false
				}
			]);
		});

		setText('');
	};

	return (
		<div className='input'>
			<input type="text" value={text} onChange={onChangeText} placeholder='Type any...' />
			<button className='btn btn-primary' onClick={onClick} type="submit">Agregar</button>
		</div>
	);
}

function TodoList() {
	const todos = useRecoilValue(todoListState);
	return (
		<div className='list'>
			{
				todos.map(item => (<TodoItem key={item.id} {...item} />))
			}
		</div>
	);
}

function changeItem(id, todoList, changedItem) {
	const index = todoList.findIndex(item => item.id === id);
	return [...todoList.slice(0, index), changedItem, ...todoList.slice(index + 1, todoList.lenght)]
}

function deleteItem(id, todoList) {
	const index = todoList.findIndex(item => item.id === id);
	return [...todoList.slice(0, index), ...todoList.slice(index + 1, todoList.lenght)]
}

function TodoItem({ id, text, isCompleted }) {
	const [todoList, setTodoList] = useRecoilState(todoListState);

	const onChangeTodoItem = (event) => {
		const textValue = event.target.value;
		const changedItem = {
			id, text: textValue, isCompleted
		};
		setTodoList(changeItem(id, todoList, changedItem));
	};

	const onToggleCompleted = () => {
		const changedItem = {
			id, text, isCompleted: !isCompleted
		};
		setTodoList(changeItem(id, todoList, changedItem));
	};

	const onDelete = () => {
		setTodoList(deleteItem(id, todoList));
	};

	return (
		<div className='item'>
			<input type="checkbox" checked={isCompleted} onChange={onToggleCompleted} />
			<input type="text" value={text} onChange={onChangeTodoItem} />
			<button className='btn btn-del' onClick={onDelete}>X</button>
		</div>
	);
}

export default App;