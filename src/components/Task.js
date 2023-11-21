import React from "react";
import "../stylesheets/Task.css";
import { AiOutlineDelete, AiFillEye, AiFillCloseCircle } from "react-icons/ai";

function Task({ id, text, complete, completeTask, removeTask }) {
	return (
		<div className={complete ? "task-container complete" : "task-container"}>
			<div className="task-text" onClick={() => completeTask(id)}>
				{text}
			</div>
			<div className="task-icon-container">
				<a className="task-detail" href="#modal">
					<AiFillEye className="task-icon" />
				</a>
				<AiOutlineDelete className="task-icon" onClick={() => removeTask(id)} />
			</div>

			<div id="modal" className="modalmask">
				<div className="modalbox movedown">
					<a href="#close" title="Close" className="close">
						<AiFillCloseCircle className="task-icon"/>
					</a>
					<h2>Tarea</h2>
					<p>
						<br />
						{text}
					</p>
					<p>
						<br />
						completado: {complete.toString()}
					</p>
				</div>
			</div>
		</div>
	);
}

export default Task;
