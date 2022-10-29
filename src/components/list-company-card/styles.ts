import styled from "styled-components";

import { CThemeProps } from "../../styles";

export const LabelCompanyName = styled.label<{
  active?: boolean;
  theme: CThemeProps;
}>`
  border: 1px solid
    ${({ theme, active = false }) =>
      active ? theme.colors.white : theme.colors.blue};
  border-radius: 5px;
  padding: 5px;
  background-color: ${({ theme, active = false }) =>
    active ? theme.colors.blue : theme.colors.white};
  font-size: ${({ theme }) => theme.size.s14}px;
  color: ${({ theme, active = false }) =>
    active ? theme.colors.white : theme.colors.blue};
  cursor: pointer;
`;

export const ListCompany = styled.div`
  border-bottom: 1px dashed ${({ theme }: CThemeProps) => theme.colors.dark2};
  padding: 20px;
  margin-bottom: 24px;
  display: flex;
  flex-wrap: wrap;
  max-width: 448px;
  width: 100%;
  gap: 10px;
`;
