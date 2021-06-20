import { createContext, useEffect, useState } from "react";
import * as SharedTypes from "shared/types";
import * as Types from "./ServersProvider.types";
import * as Utils from "./ServersProvider.utils";
import { API } from "shared/constants";
import { Toaster } from "react-hot-toast";
import axios from "axios";

export const ServersContext = createContext<Types.IServersContext | null>(null);

const ServersProvider = ({ children }: Types.Props) => {
  const [serverList, setServerList] = useState<SharedTypes.Server[]>([]);

  useEffect(() => {
    getServers();
  }, []);

  const getServers = async () => {
    return axios
      .get<SharedTypes.Server[]>(API)
      .then((res) => {
        setServerList(res.data);
      })
      .catch((err) => Utils.showErrorToast(err.errorMessage));
  };

  const turnOnServer = async (id: number) => {
    return axios
      .put<SharedTypes.Server>(API + id + "/on")
      .then((res) =>
        setServerList((prev) =>
          prev.map((server) => (server.id === id ? res.data : server))
        )
      )
      .catch((err) => Utils.showErrorToast(err.errorMessage));
  };

  const turnOffServer = async (id: number) => {
    return axios
      .put<SharedTypes.Server>(API + id + "/off")
      .then((res) =>
        setServerList((prev) =>
          prev.map((server) => (server.id === id ? res.data : server))
        )
      )
      .catch((err) => Utils.showErrorToast(err.errorMessage));
  };

  const rebootServer = async (id: number) => {
    return axios
      .put<SharedTypes.Server>(API + id + "/reboot")
      .then((res) => {
        setServerList((prev) =>
          prev.map((server) => (server.id === id ? res.data : server))
        );
        pingServer(id);
      })
      .catch((err) => Utils.showErrorToast(err.errorMessage));
  };

  const pingServer = (id: number) =>
    setTimeout(async () => {
      return axios.get<SharedTypes.Server>(API + id).then((res) => {
        if (res.data.status === SharedTypes.Status.ONLINE) {
          setServerList((prev) =>
            prev.map((server) => (server.id === id ? res.data : server))
          );
        } else {
          pingServer(id);
        }
      });
    }, 1000);

  return (
    <ServersContext.Provider
      value={{
        serverList,
        turnOnServer,
        turnOffServer,
        rebootServer,
      }}
    >
      <Toaster />
      {children}
    </ServersContext.Provider>
  );
};

export default ServersProvider;
