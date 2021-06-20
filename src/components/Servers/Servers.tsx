import * as Styles from "./Servers.styles";
import SearchInput from "components/SearchInput";
import ServerList from "components/ServerList";
import useServersContext from "hooks/useServersContext";
import { useState } from "react";

const Servers = () => {
  const { serverList } = useServersContext();
  const [searchedServer, setSearchedServer] = useState("");

  return (
    <Styles.Center>
      <Styles.Container>
        <Styles.Header>
          <div>
            <Styles.Title>Servers</Styles.Title>
            <Styles.Text>Number of elements: {serverList.length}</Styles.Text>
          </div>
          <SearchInput onTextChanged={setSearchedServer} />
        </Styles.Header>
        <ServerList servers={serverList} searchedServer={searchedServer} />
      </Styles.Container>
    </Styles.Center>
  );
};

export default Servers;
