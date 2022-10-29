import { ICard } from "./types";
import { getShortDescription } from "./util";

import * as S from "./styles";

export const Card = ({
  description = "",
  imgUrl,
  subTitle,
  title,
  postedDate,
}: ICard) => {
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
        <S.Separator>
          <S.CardPostedDate>{postedDate}</S.CardPostedDate>
        </S.Separator>
      </S.Content>
    </S.Card>
  );
};
