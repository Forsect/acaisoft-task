import { render } from "@testing-library/react";
import ServerList from "./ServerList";

it("Should render with no errors", () => {
  render(<ServerList servers={[]} />);
});
