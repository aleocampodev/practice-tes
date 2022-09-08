import { render, screen } from "@testing-library/react";
import InputSearch from "../components/InputSearch";

describe("InputSearch component", () => {
  test("should render the InputSearch without crashing", () => {
    render(<InputSearch />);
    screen.debug();
  });
});
