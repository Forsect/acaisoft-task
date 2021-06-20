import * as SharedTypes from "shared/types";

export interface Props {
  children: React.ReactNode;
}

export interface IServersContext {
  serverList: SharedTypes.Server[];
  turnOnServer: (id: number) => void;
  turnOffServer: (id: number) => void;
  rebootServer: (id: number) => void;
}
