import { Button, ListCompanyCard, List } from "../../src/components";
import { useTestState } from "../../src/module/test/state";
import { IJobs, IServerSideProps } from "../../src/module/test/types";

import * as S from "../../src/module/test/styles";

export default function Jobs({ jobsData }: IJobs) {
  const {
    jobs,
    companies,
    isLastSevenDays,
    isActiveCompany,
    getByCompanyName,
    handleActiveCompany,
    handleGetJobsByCompanyName,
    handleGetJobsByLastSevenDays,
  } = useTestState({ jobsData });

  return (
    <S.Container>
      <S.Title>List of Jobs</S.Title>
      <Button
        marginBottom={20}
        active={getByCompanyName}
        label="Get by company name"
        onClick={handleGetJobsByCompanyName}
      />
      <ListCompanyCard
        companies={companies}
        isActiveCompany={isActiveCompany}
        getByCompanyName={getByCompanyName}
        handleActiveCompany={handleActiveCompany}
      />
      <Button
        marginBottom={20}
        label="Last 7 days"
        active={isLastSevenDays}
        onClick={handleGetJobsByLastSevenDays}
      />
      <List jobs={jobs} />
    </S.Container>
  );
}

export async function getServerSideProps({ res }: IServerSideProps) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  const response = await fetch("/api/jobs");
  const jobsData = await response.json();

  return { props: { jobsData } };
}
