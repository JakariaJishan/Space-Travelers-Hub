import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import Layouts from "./Layouts";

describe("testing Layouts", () => {
  it("all components renders correctly", () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Layouts />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
