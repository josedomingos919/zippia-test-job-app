import { IList } from "./types";
import { Card } from "../card";

import * as S from "./styles";

export const List = ({ jobs = [] }: IList) => {
  return (
    <S.List>
      {jobs?.map(
        ({ jobId, jobTitle, companyLogo, companyName, jobDescription }) => (
          <Card
            key={jobId}
            title={jobTitle}
            imgUrl={companyLogo}
            subTitle={companyName}
            description={jobDescription}
          />
        )
      )}
    </S.List>
  );
};
