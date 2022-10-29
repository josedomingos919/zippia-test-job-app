import styled from "styled-components";

import { CThemeProps } from "../../styles";

export const Container = styled.button<{
  active: boolean;
  theme: CThemeProps;
  marginBottom: number;
}>`
  border: 1px solid
    ${({ theme, active = false }) =>
      active ? theme.colors.blue : theme.colors.dark3};

  background-color: ${({ active, theme }) =>
    active ? theme.colors.blue : theme.colors.white};

  color: ${({ theme, active }) =>
    active ? theme.colors.white : theme.colors.dark3};

  font-size: ${({ theme }) => theme.size.s14}px;

  padding: 10px;
  border-radius: 5px;
  min-width: 150px;
  margin-bottom: ${({ marginBottom = 0 }) => marginBottom}px;
  cursor: pointer;
`;
