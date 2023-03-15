import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import Nav from "./Nav";

describe("testing Missions", () => {
  it("test component renders correctly", () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Nav />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("test text in the document", () => {
    render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    );
    expect(screen.getByText("Missions")).toBeInTheDocument();
  });
});
