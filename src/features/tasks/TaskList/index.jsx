import { Item, Button, DoneTask, Tasks } from './styled.js'

const TasksList = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
	<Tasks>
		{tasks.map(task => (
			<Item key={task.id} hidden={task.done && hideDone}>
				<Button onClick={() => toggleTaskDone(task.id)}>
					<span>{task.done ? '✓' : ''}</span>
				</Button>
				<DoneTask done={task.done}>{task.content}</DoneTask>
				<Button removeItem onClick={() => removeTask(task.id)}>
					<span>🗑</span>
				</Button>
			</Item>
		))}
	</Tasks>
)

export default TasksList
