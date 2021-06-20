import * as SharedTypes from "shared/types";

export interface Props {
  children: React.ReactNode;
}

export interface IServersContext {
  serverList: SharedTypes.Server[];
  loading: boolean;
}
