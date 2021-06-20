interface Endpoints {
  getServers: string;
}

const basicUrl = "http://localhost:4454/";

const endpoints: Endpoints = {
  getServers: basicUrl + "servers",
};

export default endpoints;
