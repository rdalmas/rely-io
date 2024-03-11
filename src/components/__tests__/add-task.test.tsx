import { render, screen } from "@testing-library/react";
import AddTask from "../add-task";

describe("add-task -> ", () => {
    it("should have title field", () => {
        render(<AddTask />);
        expect(screen.findAllByLabelText("/title/"));
    });
    it("should have description field", () => {
        render(<AddTask />);
        expect(screen.findAllByLabelText("/description/"));
    });
    it("should have due date field", () => {
        render(<AddTask />);
        expect(screen.findAllByLabelText("/due date/"));
    });
    it("should have a button to add the task", () => {
        render(<AddTask />);
        expect(screen.findAllByLabelText("/add task/"));
    });
});
