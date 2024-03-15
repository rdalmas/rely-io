import { useContext, useState } from "react";
import { Task } from "../types/task";
import { generateId } from "../helpers/generateId";
import { UserContext } from "../providers/user.provider";

type TaskListProps = {
    tasks: Task[];
    addTask: (task: Task) => void;
    removeTask: (id: string) => void;
    markTaskAsCompleted: (id: string) => void;
}

const TaskList = ({ tasks, addTask, removeTask, markTaskAsCompleted }: TaskListProps) => {
    const { user } = useContext(UserContext); 
    const defaultTask = { id: generateId(), title: "", description: "", dueDate: new Date(Date.now()), completed: false, username: user.username } as Task;
    const [newTask, setNewTask] = useState<Task>(defaultTask);

    const changeNewTask = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
        setNewTask((prevTask) => ({...prevTask, [field]: e.target.value }));
    };

    const markNewTaskAsCompleted = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewTask((prevTask) => ({ ...prevTask, completed: e.target.checked }));
    }

    const onAddTask = () => {
        addTask(newTask);
        setNewTask(defaultTask);
    }

    const shouldDisableAddButton = !newTask.title || !newTask.description || !newTask.dueDate;

    return (
        <section>
            <h3>List of Tasks</h3>
            {tasks.length === 0 && (
                <>
                    <h3>No tasks</h3>
                    <h4>Add a new task below</h4>
                </>
            )}
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Due Date</th>
                        <th>Completed</th>
                        <th>Action</th>
                        <th>User</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input required value={newTask.title} data-testid="title-input" type="text" onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeNewTask(e, "title")} />
                        </td>
                        <td>
                            <input required value={newTask.description} data-testid="description-input" type="text" onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeNewTask(e, "description")} />
                        </td>
                        <td>
                            <input required value={newTask.dueDate.toString()} type="date" data-testid="new-due-date-input" onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeNewTask(e, "dueDate")} />
                        </td>
                        <td>
                            <input checked={newTask.completed} name="new-task-completed" data-testid="new-task-completed" type="checkbox" onChange={(e: React.ChangeEvent<HTMLInputElement>) => markNewTaskAsCompleted(e)} />
                        </td>
                        <td>
                            <button data-testid="add-task-button" disabled={shouldDisableAddButton} onClick={onAddTask}>Add</button>
                        </td>
                    </tr>
                    {tasks.map((task, index) => (
                        <tr key={task.title + index}>
                            <td>{task.title}</td>
                            <td>{task.description}</td>
                            <td>{task.dueDate.toString()}</td>
                            <td>
                                <input checked={task.completed} name="task-completed" data-testid="task-completed" type="checkbox" onChange={() => markTaskAsCompleted(task.id)} />
                            </td>
                            <td>
                                <button data-testid="remove-task-button" onClick={() => removeTask(task.id)}>Remove</button>
                            </td>
                            <td>{task.username}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>   
    );
}

export default TaskList;
