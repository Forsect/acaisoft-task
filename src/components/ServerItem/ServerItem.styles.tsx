import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 9px 42px 9px 42px;
  background-color: #fff;
  border: 2px solid #ededf0;
  border-top: none;
`;

export const ServerContainer = styled.div`
  width: 356px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Name = styled.div`
  font-size: 13px;
  color: #494e61;
`;

export const Flex = styled.div`
  display: flex;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 37px;
  height: 37px;
  border-radius: 50%;
  transition: 0.3s;
  margin: 0 0 0 8px;

  :hover {
    cursor: pointer;
    background-color: #f2f3f6;
  }
`;
