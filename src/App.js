import "./App.css";
import ListTasks from "./components/ListTasks";

function App() {
	return (
		<div className="container-app-tasks">
			<div className="tasks-list-main">
				<h1>Mis Tareas</h1>
				<ListTasks />
			</div>
		</div>
	);
}

export default App;
