import { useState } from "react";

const Initial_State = [
	{ title: "Shopping", done: true },
	{ title: "Read Book", done: false },
];

function App() {
	const [list, setList] = useState(Initial_State);
	const [newTitle, setNewTitle] = useState("");

	const addTitle = () => {
		setList([...list, { title: newTitle, done: false }]);
	};

	return (
		<div className='App'>
			<div className='todo-title'>Todo List</div>
			<div className='add-form'>
				<input
					type='text'
					value={newTitle}
					placeholder='Add to List'
					onChange={(e) => setNewTitle(e.target.value)}
				/>
				<button onClick={addTitle} className='add-btn'>
					Add
				</button>
			</div>
			<div className='list'>
				{list.map((item, index) => (
					<div key={index} className={item.done ? "done" : ""}>
						{item.title}
					</div>
				))}
				<button className='clear'>Clear Done</button>
			</div>
		</div>
	);
}

export default App;
