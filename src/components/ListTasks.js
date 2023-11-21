import React, { useState } from "react";
import TaskForm from "./TaskForm";
import "../stylesheets/ListTasks.css";
import Task from "./Task";

function ListTasks() {
	const [tasks, setTasks] = useState([]);

	const addTask = (task) => {
		if (task.text.trim()) {
			task.text = task.text.trim();
			let updatedTasks = [task, ...tasks];
			setTasks(updatedTasks);
		}
	};

	const removeTask = (id) => {
		const updatedTasks = tasks.filter((task) => task.id !== id);
		setTasks(updatedTasks);
	};

	const completeTask = (id) => {
		const updatedTasks = tasks.map((task) => {
			if (task.id === id) {
				task.complete = !task.complete;
			}
			return task;
		});

		setTasks(updatedTasks);
	};

	return (
		<>
			<TaskForm addTask={addTask} />
			<div className="task-list-container">
				{tasks.map((task) => (
					<Task
						key={task.id}
						id={task.id}
						text={task.text}
						complete={task.complete}
						completeTask={completeTask}
						removeTask={removeTask}
					/>
				))}
			</div>
		</>
	);
}

export default ListTasks;
