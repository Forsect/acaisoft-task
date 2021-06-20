import styled, { css } from "styled-components";

export const Option = styled.div<{ isDisabled?: boolean }>`
  width: 137px;
  padding: 23px 28px;
  font-size: 13px;
  color: #a4a8b8;
  background-color: #fff;
  transition: 0.2s;
  cursor: default;

  ${({ isDisabled }) =>
    !isDisabled &&
    css`
      color: #494e61;
      :hover {
        cursor: pointer;
        background-color: #f2f3f6;
      }
    `}
`;

export const Container = styled.div`
  box-shadow: 0 0 8px gray;
`;
