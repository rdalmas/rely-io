import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import App from "./App";

describe("App.tsx - ", () => {
    it("renders App", () => {
        render(<App />);
        expect(screen.findAllByText("/app/"));
    });
    it("should increase count on click button", async () => {
        const app = render(<App />);
        expect(screen.getAllByText(/0/));
        const button = app.getByTestId("btn-increase-count");
        await userEvent.click(button);
        expect(screen.getAllByText(/1/));
    });
})
