import { useState } from "react";

function ToDoList() {
	const [items, setItem] = useState([
		{ text: "Do my bed", completed: true },
		{ text: "Do my homework", completed: false },
		{ text: "Wash my clothes", completed: false },
	]);

	const handleAddToDo = (text) => {
		setItem([...items, { text, completed: false }]);
	};

	return (
		<div>
			<input
				type="text"
				placeholder="Add a todo"
				onChange={(e) => handleAddToDo(e.target.value)}
			/>
			<ul>
				{items.map((item) => {
					<li key={item.text}>
						<input
							type="checkbox"
							checked={item.completed}
							onChange={() => {
								ToDoList.text;
							}}
						/>
					</li>;
				})}
			</ul>
		</div>
	);
}

export default ToDoList;
