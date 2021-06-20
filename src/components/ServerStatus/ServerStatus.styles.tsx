import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 78px;
`;

export const IconWrapper = styled.div`
  width: 16px;
  display: flex;
  justify-content: center;
`;

const StatusBase = styled.div`
  font-size: 12px;
  margin-left: 4px;
`;

export const Online = styled(StatusBase)`
  color: #33cad4;
`;

export const Offline = styled(StatusBase)`
  color: #494e61;
`;

export const Reboot = styled(StatusBase)`
  color: #9ca7d3;
`;
