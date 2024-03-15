import { render, screen } from "@testing-library/react";

import TaskList from "../task-list";
import { tasks } from "../__fixtures__/tasks";

describe("task-list -> ", () => {
    it("should display the title", () => {
        render(<TaskList tasks={tasks} addTask={() => {}} removeTask={() => {}} markTaskAsCompleted={() => {}} />);
        expect(screen.findByText("/list of tasks/"));
    });
    it("should display a table with headings", () => {
        render(<TaskList tasks={tasks} addTask={() => {}} removeTask={() => {}} markTaskAsCompleted={() => {}} />);
        expect(screen.findByText("/title/"));
        expect(screen.findByText("/description/"));
        expect(screen.findByText("/due date/"));
    });
    it("should display a table with data", () => {
        render(<TaskList tasks={tasks} addTask={() => {}} removeTask={() => {}} markTaskAsCompleted={() => {}} />);
        expect(screen.findByText("/test task 1/"));
        expect(screen.findByText("/test task description 1/"));
    });
    it("should display message if no tasks were found", () => {
        render(<TaskList tasks={tasks} addTask={() => {}} removeTask={() => {}} markTaskAsCompleted={() => {}} />);
        expect(screen.findByText("/no tasks/"));
    });
});
