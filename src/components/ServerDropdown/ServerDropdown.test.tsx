import { render } from "@testing-library/react";
import ServersProvider from "providers/ServersProvider";
import { Status } from "shared/types";
import ServerDropdown from "./ServerDropdown";

it("Should render with no errors", () => {
  render(
    <ServersProvider>
      <ServerDropdown server={{ id: 1, name: "Test", status: Status.ONLINE }} />
    </ServersProvider>
  );
});
