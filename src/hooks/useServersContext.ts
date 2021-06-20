import { ServersContext } from "providers/ServersProvider/ServersProvider";
import { IServersContext } from "providers/ServersProvider/ServersProvider.types";
import { useContext } from "react";

const useServersContext = () => {
  const context = useContext(ServersContext) as IServersContext;

  if (context === undefined) {
    throw new Error("useServersContext must be used within a ServersProvider");
  }

  return context;
};

export default useServersContext;
