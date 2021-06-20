export interface Server {
  id: number;
  name: string;
  status: Status;
}

export enum Status {
  ONLINE = "ONLINE",
  OFFLINE = "OFFLINE",
  REBOOTING = "REBOOTING",
}
