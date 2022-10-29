import { IListCompanyCard } from "./types";

import * as S from "./styles";

export const ListCompanyCard = ({
  companies = [],
  getByCompanyName = false,
  isActiveCompany = () => false,
  handleActiveCompany = () => {},
}: IListCompanyCard) => {
  if (!companies?.length || !getByCompanyName) return <></>;

  return (
    <S.ListCompany>
      {companies.map((companyName, index) => (
        <S.LabelCompanyName
          onClick={() => handleActiveCompany(companyName)}
          key={index}
          active={isActiveCompany(companyName)}
        >
          {companyName}
        </S.LabelCompanyName>
      ))}
    </S.ListCompany>
  );
};
