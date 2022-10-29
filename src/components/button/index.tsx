import { IButton } from "./types";

import * as S from "./styles";

export const Button = ({
  label,
  onClick,
  active = false,
  marginBottom = 0,
}: IButton) => {
  return (
    <S.Container marginBottom={marginBottom} active={active} onClick={onClick}>
      {label}
    </S.Container>
  );
};
