import { render } from "@testing-library/react";
import { Status } from "shared/types";
import ServerStatus from "./ServerStatus";

it("Should render with no errors", () => {
  render(<ServerStatus status={Status.ONLINE} />);
});
