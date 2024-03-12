import { useState } from "react";
import { TaskList } from "../components";
import { Task } from "../types/task";

const TaskPage = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    return (
        <main>
            <TaskList tasks={tasks} updateTasks={setTasks} />
        </main>
    )
};

export default TaskPage;
