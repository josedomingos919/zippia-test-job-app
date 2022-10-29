import styled from "styled-components";

import { CThemeProps } from "../../styles";

export const Card = styled.div`
  border: 1px solid ${({ theme }: CThemeProps) => theme.colors.dark};
  border-radius: 4px;
  cursor: pointer;
  padding: 10px;
  width: 100%;
  max-width: 448px;
  gap: 10px;
  display: flex;
  flex-direction: row;
`;

export const LogoContainer = styled.div`
  width: 50px;
  height: 50px;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.label`
  color: ${({ theme }: CThemeProps) => theme.colors.dark2};
  font-size: ${({ theme }: CThemeProps) => theme.size.s18}px;
  font-weight: 600;
  line-height: 22px;
  margin-bottom: 5px;
`;

export const Subtitle = styled.label`
  color: ${({ theme }: CThemeProps) => theme.colors.dark2};
  font-size: ${({ theme }: CThemeProps) => theme.size.s13}px;
  font-weight: 600;
  line-height: 18px;
  opacity: 0.8;
  margin-bottom: 15px;
`;

export const Description = styled.label`
  color: ${({ theme }: CThemeProps) => theme.colors.dark2};
  font-size: ${({ theme }: CThemeProps) => theme.size.s14};
  line-height: 18px;
  opacity: 0.8;
  margin-bottom: 20px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const Separator = styled.div`
  margin-bottom: 10px;
`;

export const CardPostedDate = styled.span`
  padding: 5px;
  margin-top: 5px;
  border-radius: 5px;
  background-color: ${({ theme }: CThemeProps) => theme.colors.opacity1};
  color: ${({ theme }: CThemeProps) => theme.colors.blackOpacity};
`;
