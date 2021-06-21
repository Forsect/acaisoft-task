import Servers from "components/Servers";
import ServersProvider from "providers/ServersProvider";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <ServersProvider>
        <Servers />
      </ServersProvider>
    </>
  );
};

export default App;
