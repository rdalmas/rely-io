import { Task } from "../../types/task";

const tasks: Task[] = [
    {
        title: "Test Task 1",
        description: "Description Task 1",
        dueDate: new Date(Date.now()),
        completed: false,
        id: "1",
        username: "foo"
    },
    {
        title: "Test Task 2",
        description: "Description Task 2",
        dueDate: new Date(Date.now()),
        completed: false,
        id: "2",
        username: "foo"
    },
    {
        title: "Test Task 3",
        description: "Description Task 3",
        dueDate: new Date(Date.now()),
        completed: false,
        id: "3",
        username: "bar"
    },
    {
        title: "Test Task 4",
        description: "Description Task 4",
        dueDate: new Date(Date.now()),
        completed: true,
        id: "4",
        username: "bar"
    }
];

export { tasks }
