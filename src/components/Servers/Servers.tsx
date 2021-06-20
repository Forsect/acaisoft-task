import * as Styles from "./Servers.styles";
import SearchInput from "components/SearchInput";
import ServerList from "components/ServerList";
import useServersContext from "hooks/useServersContext";

const Servers = () => {
  const { serverList } = useServersContext();

  return (
    <Styles.Center>
      <Styles.Container>
        <Styles.Header>
          <div>
            <Styles.Title>Servers</Styles.Title>
            <Styles.Text>Number of elements: {serverList.length}</Styles.Text>
          </div>
          <SearchInput />
        </Styles.Header>
        <ServerList servers={serverList} />
      </Styles.Container>
    </Styles.Center>
  );
};

export default Servers;
