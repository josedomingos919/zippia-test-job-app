import { ICard } from "./types";
import { getShortDescription } from "./util";

import * as S from "./styles";

export const Card = ({ description = "", imgUrl, subTitle, title }: ICard) => {
  return (
    <S.Card>
      <S.LogoContainer>
        <S.Image src={imgUrl} />
      </S.LogoContainer>
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subTitle}</S.Subtitle>
        <S.Description
          dangerouslySetInnerHTML={{ __html: getShortDescription(description) }}
        />
      </S.Content>
    </S.Card>
  );
};
