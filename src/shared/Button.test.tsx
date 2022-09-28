import Button from "./Button";
import { render, screen } from "@testing-library/react";

describe("Button", () => {
  it("should render children", () => {
    const { getByRole } = render(
      <Button type="button" variant="primary">
        Click me
      </Button>
    );
    getByRole("button", { name: "Click me" });
  });

  it("should set a custom CSS class", () => {
    const { getByRole } = render(
      <Button type="button" variant="primary" className="my-class">
        Click me
      </Button>
    );
    expect(getByRole("button", { name: "Click me" })).toHaveClass("my-class");
  });

  it("should apply the button type prop", () => {
    const { getByRole } = render(
      <Button type="submit" variant="primary">
        Click me
      </Button>
    );
    expect(getByRole("button", { name: "Click me" })).toHaveAttribute(
      "type",
      "submit"
    );
  });

  it("should apply the proper styles for a variant", () => {
    render(
      <Button type="button" variant="primary">
        Click me
      </Button>
    );
    expect(screen.getByRole("button", { name: "Click me" })).toHaveClass(
      "bg-blue-500 text-white"
    );
  });
});
