import { render } from "@testing-library/react";
import { Status } from "shared/types";
import ServerItem from "./ServerItem";

it("Should render with no errors", () => {
  render(
    <ServerItem server={{ id: 1, name: "Test", status: Status.ONLINE }} />
  );
});
