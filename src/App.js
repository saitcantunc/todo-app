import { useEffect, useState } from "react";

const Initial_State = [
	{ id: 1, title: "Shopping", done: true },
	{ id: 2, title: "Read Book", done: false },
];

function App() {
	const [list, setList] = useState(() => {
		const savedList = localStorage.getItem("list");

		if (savedList) {
			return JSON.parse(savedList);
		} else {
			return [];
		}
	});
	const [newTitle, setNewTitle] = useState("");

	useEffect(() => {
		localStorage.setItem("list", JSON.stringify(list));
	}, [list]);

	const addTitle = () => {
		setList([...list, { id: list.length + 1, title: newTitle, done: false }]);
		setNewTitle("");
	};

	const handleDone = (id) => {
		setList(list.map((el) => (el.id === id ? { ...el, done: !el.done } : el)));
	};

	const clearDone = () => {
		setList(list.filter((item) => !item.done));
	};

	return (
		<div className='App'>
			<div className='todo-title-container'>
				<div className='todo-title'>Todo List</div>
			</div>
			<div className='add-form'>
				<input
					type='text'
					value={newTitle}
					placeholder='Add to List..'
					onChange={(e) => setNewTitle(e.target.value)}
				/>
				<button onClick={addTitle} className='add-btn'>
					Add
				</button>
			</div>
			<div className='list'>
				{list.map((item) => (
					<div
						key={item.id}
						onClick={() => handleDone(item.id)}
						className={`item ${item.done ? "done" : ""}`}>
						{item.title}
					</div>
				))}
				<button onClick={clearDone} className='clear'>
					Clear Done
				</button>
			</div>
		</div>
	);
}

export default App;
