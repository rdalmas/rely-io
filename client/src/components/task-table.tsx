import { useContext, useState } from "react";

import { Task } from "../types/task";
import { generateId } from "../helpers/generateId";
import { formatDate } from "../helpers/formatDate";
import { UserContext } from "../providers/user.provider";

import add from "../assets/add.svg";
import remove from "../assets/remove.svg";

import style from "./task-table.module.scss";

type TaskListProps = {
    tasks: Task[];
    addItem: (task: Task) => void;
    removeItem: (id: string) => void;
    checkboxAction: (id: string) => void;
}

const Table = ({ tasks, addItem, removeItem, checkboxAction }: TaskListProps) => {
    const { user } = useContext(UserContext);
    const initialItemState = { id: generateId(), title: "", description: "", dueDate: "", completed: false, username: user.username } as Task;
    const [newItem, setNewItem] = useState<Task>(initialItemState);

    const changeNewTask = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
        setNewItem((prevTask) => ({...prevTask, [field]: e.target.value }));
    };

    const markNewTaskAsCompleted = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewItem((prevTask) => ({ ...prevTask, completed: e.target.checked }));
    }

    const onAddItem = () => {
        addItem(newItem);
        setNewItem(initialItemState);
    }

    const shouldDisableAddButton = !newItem.title || !newItem.description || !newItem.dueDate;

    return (
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th colSpan={2}>Due Date</th>
                    <th>Completed</th>
                    <th>Action</th>
                    <th>User</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td data-header="Title">
                        <input tabIndex={0} id="title" required value={newItem.title} data-testid="title-input" type="text" onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeNewTask(e, "title")} />
                    </td>
                    <td data-header="Description">
                        <input id="description" required value={newItem.description} data-testid="description-input" type="text" onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeNewTask(e, "description")} />
                    </td>
                    <td colSpan={2} data-header="Due Date">
                        <input id="due-date" required min={new Date().toISOString().split('T')[0]} value={newItem.dueDate} type="date" data-testid="new-due-date-input" onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeNewTask(e, "dueDate")} />
                    </td>
                    <td data-header="Completed">
                        <input id="completed" checked={newItem.completed} name="new-task-completed" data-testid="new-task-completed" type="checkbox" onChange={(e: React.ChangeEvent<HTMLInputElement>) => markNewTaskAsCompleted(e)} />
                    </td>
                    <td data-header="Action">
                        <button data-testid="add-task-button" disabled={shouldDisableAddButton} onClick={onAddItem}><img alt="add task" src={add} height={20} width={20} /></button>
                    </td>
                    <td data-header="User">{user.username}</td>
                </tr>
                {tasks.map((task, index) => (
                    <tr key={task.title + index}>
                        <td data-header="Title">{task.title}</td>
                        <td data-header="Description">{task.description}</td>
                        <td colSpan={2} data-header="Due Date">{formatDate(task.dueDate)}</td>
                        <td data-header="Completed">
                            <input checked={task.completed} name="task-completed" data-testid="task-completed" type="checkbox" onChange={() => checkboxAction(task.id)} />
                        </td>
                        <td data-header="Action">
                            <button data-testid="remove-task-button" onClick={() => removeItem(task.id)}><img alt="remove task" src={remove} height={20} width={20} /></button>
                        </td>
                        <td data-header="User">{task.username}</td>
                    </tr>
                ))}
                {tasks.length === 0 && (
                    <tr>
                        <td data-header="Message" colSpan={7} className={style.message}>No tasks available</td>
                    </tr>
                )}
            </tbody>
        </table>  
    );
}

export default Table;
