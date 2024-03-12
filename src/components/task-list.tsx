import { Dispatch, SetStateAction, useState } from "react";
import { Task } from "../types/task";
import { generateId } from "../helpers/generateId";

type TaskListProps = {
    tasks: Task[];
    updateTasks: Dispatch<SetStateAction<Task[]>>;
}

const TaskList = ({ tasks, updateTasks }: TaskListProps) => {
    const defaultTask = { id: generateId(), title: "", description: "", dueDate: new Date(Date.now()), completed: false };
    const [newTask, setNewTask] = useState<Task>(defaultTask);

    const changeNewTask = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
        setNewTask((prevTask) => ({...prevTask, [field]: e.target.value }));
    };

    const markNewTaskAsCompleted = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewTask((prevTask) => ({ ...prevTask, completed: e.target.checked }));
    }

    const addNewTask = () => {
        updateTasks((prevTasks) => prevTasks.concat([newTask]));
        setNewTask(defaultTask);
    }

    const removeTask = (id: string) => {
        const taskToRemoveIndex = tasks.findIndex((task) => task.id === id);

        if (taskToRemoveIndex !== -1) {
            updateTasks((prevTasks) => [...prevTasks.slice(0, taskToRemoveIndex), ...prevTasks.slice(taskToRemoveIndex + 1)]);
        }
    }

    const markTaskAsCompleted = (id: string) => {
        const newTasks = tasks.map((task) => {
            if (task.id === id) {
                return {
                    ...task,
                    completed: !task.completed,
                }
            } else {
                return task;
            }
        });

        updateTasks(newTasks);
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
                            <button data-testid="add-task-button" disabled={shouldDisableAddButton} onClick={addNewTask}>Add</button>
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
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>   
    );
}

export default TaskList;
