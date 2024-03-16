import { render, screen } from "@testing-library/react";

import TaskTable from "../task-table";
import { tasks } from "../__fixtures__/tasks";

describe("task-list -> ", () => {
    it("should display the title", () => {
        render(<TaskTable tasks={tasks} addItem={() => {}} removeItem={() => {}} checkboxAction={() => {}} />);
        expect(screen.findByText("/list of tasks/"));
    });
    it("should display a table with headings", () => {
        render(<TaskTable tasks={tasks} addItem={() => {}} removeItem={() => {}} checkboxAction={() => {}} />);
        expect(screen.findByText("/title/"));
        expect(screen.findByText("/description/"));
        expect(screen.findByText("/due date/"));
    });
    it("should display a table with data", () => {
        render(<TaskTable tasks={tasks} addItem={() => {}} removeItem={() => {}} checkboxAction={() => {}} />);
        expect(screen.findByText("/test task 1/"));
        expect(screen.findByText("/test task description 1/"));
    });
    it("should display message if no tasks were found", () => {
        render(<TaskTable tasks={tasks} addItem={() => {}} removeItem={() => {}} checkboxAction={() => {}} />);
        expect(screen.findByText("/no tasks/"));
    });
});
