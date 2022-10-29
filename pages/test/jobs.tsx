import { Button, ListCompanyCard, List } from "../../src/components";
import { useTestState } from "./state";

import * as S from "./styles";

export default function Jobs() {
  const {
    jobs,
    companies,
    isLastSevenDays,
    isActiveCompany,
    getByCompanyName,
    handleActiveCompany,
    handleGetJobsByCompanyName,
    handleGetJobsByLastSevenDays,
  } = useTestState();

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
