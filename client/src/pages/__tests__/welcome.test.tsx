import { render, screen, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

import Welcome from "../welcome";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "../../providers/user.provider";

describe("welcome page -> ", () => {
    it("should display the title", () => {
        render(
            <BrowserRouter>
                <Welcome />
            </BrowserRouter>
        );
        expect(screen.findByText("/welcome/"));
    });
    it("should display an input for username", () => {
        render(
            <BrowserRouter>
                <Welcome />
            </BrowserRouter>
        );
        expect(screen.findByTestId("username-input"));
    });
    it("should display an input for color", () => {
        render(
            <BrowserRouter>
                <Welcome />
            </BrowserRouter>
        );
        expect(screen.findByTestId("color-input"));
    });
    it("should display a button to move to next page", () => {
        render(
            <BrowserRouter>
                <Welcome />
            </BrowserRouter>
        );
        expect(screen.findByTestId("submit-button"));
    });
    it("should change username when user types in", async () => {
        const { getByTestId } = render(
            <BrowserRouter>
                <UserProvider>
                    <Welcome />
                </UserProvider>
            </BrowserRouter>
        );
        userEvent.type(getByTestId("username-input"), "test-user");
        await waitFor(() => {
            const usernameInput = screen.getByTestId<HTMLInputElement>("username-input");
            expect(usernameInput.value).toBe("test-user")
        });
    });
});
