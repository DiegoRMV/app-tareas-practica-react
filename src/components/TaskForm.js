import React, { useState } from "react";
import "../stylesheets/TaskForm.css";
import { v4 } from "uuid";

function TaskForm(props) {
	const [input, setInput] = useState("");

	const handleChange = (e) => {
		setInput(e.target.value);
	};

	const handleShipping = (e) => {
		// console.log(e.target.input.value)
		// setInput(e.target.input.value);
		e.preventDefault();
		const taskNew = {
			id: v4(),
			text: input,
			complete: false,
		};

		props.addTask(taskNew);
	};

	return (
		<form className="task-form" onSubmit={handleShipping}>
			<input
				className="task-input"
				type="text"
				placeholder="Escribe una tarea"
				name="input"
				onChange={handleChange}
			/>
			<button className="task-button">Agregar Tarea</button>
		</form>
	);
}

export default TaskForm;
