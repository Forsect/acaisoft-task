import Servers from "components/Servers";
import ServersProvider from "providers/ServersProvider";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div>
      <NavBar />
      <ServersProvider>
        <Servers />
      </ServersProvider>
    </div>
  );
};

export default App;
