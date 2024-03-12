import { Task } from "../types/task";

type TaskListProps = {
    tasks: Task[]; 
}

const TaskList = (props: TaskListProps) => (
    <section>
        <h3>List of Tasks</h3>
        {props.tasks.length === 0 ? (
                    <h3>No tasks</h3>
        ) : (
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Due Date</th>
                    </tr>
                </thead>
                <tbody>
                    {props.tasks.map((task, index) => (
                        <tr key={task.title + index}>
                            <td>{task.title}</td>
                            <td>{task.description}</td>
                            <td>{task.dueDate.toString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )}
    </section>   
);

export default TaskList;
