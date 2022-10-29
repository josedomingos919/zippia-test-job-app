import { IList } from "./types";
import { Card } from "../card";

import * as S from "./styles";

export const List = ({ jobs = [] }: IList) => {
  return (
    <S.List>
      {jobs?.map(
        ({
          jobId,
          jobTitle,
          postedDate,
          companyLogo,
          companyName,
          jobDescription,
        }) => (
          <Card
            key={jobId}
            title={jobTitle}
            imgUrl={companyLogo}
            subTitle={companyName}
            postedDate={postedDate}
            description={jobDescription}
          />
        )
      )}
    </S.List>
  );
};
