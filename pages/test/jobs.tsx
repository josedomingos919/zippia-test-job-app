import { Card } from "../../src/components";
import { useTestState } from "./state";

import * as S from "./styles";

export default function Jobs() {
  const { jobs } = useTestState();
  console.log({ jobs });
  return (
    <S.Container>
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
    </S.Container>
  );
}
