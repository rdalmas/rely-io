import { render, screen } from "@testing-library/react";
import Header from "../header";

describe("header -> ", () => {
    it("should display the user", () => {
        render(<Header username={"username"} />);
        expect(screen.findByText("/username/"));
    });
});
