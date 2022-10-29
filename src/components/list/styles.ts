import styled from "styled-components";

export const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  width: 100%;

  div:not(:last-child) {
    margin-bottom: 25px;
  }
`;
