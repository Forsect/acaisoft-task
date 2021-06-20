import * as Styles from "./ServerList.styles";
import * as Types from "./ServerList.types";
import ServerItem from "components/ServerItem";

const ServerList = ({ servers, searchedServer }: Types.Props) => {
  return (
    <Styles.Container>
      <Styles.HeaderContainer>
        <Styles.FixedWidthContainer>
          <Styles.NameHeader>NAME</Styles.NameHeader>
          <Styles.StatusHeader>STATUS</Styles.StatusHeader>
        </Styles.FixedWidthContainer>
      </Styles.HeaderContainer>
      {servers
        .filter((server) =>
          server.name.toLowerCase().includes(searchedServer.toLowerCase())
        )
        .map((server) => (
          <ServerItem key={server.id} server={server} />
        ))}
    </Styles.Container>
  );
};

export default ServerList;
