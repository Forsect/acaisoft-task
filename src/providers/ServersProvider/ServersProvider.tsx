import { createContext, useEffect } from "react";
import useAxios from "axios-hooks";
import * as SharedTypes from "shared/types";
import * as Types from "./ServersProvider.types";
import * as Utils from "./ServersProvider.utils";
import endpoints from "shared/endpoints";
import { Toaster } from "react-hot-toast";

export const ServersContext = createContext<Types.IServersContext | null>(null);

const ServersProvider = ({ children }: Types.Props) => {
  const [{ data, loading, error }, refetch] = useAxios<SharedTypes.Server[]>(
    endpoints.getServers
  );

  useEffect(() => {
    error && Utils.showErrorToast();
  }, [error]);

  return (
    <ServersContext.Provider value={{ serverList: data || [], loading }}>
      <Toaster />
      {children}
    </ServersContext.Provider>
  );
};

export default ServersProvider;
