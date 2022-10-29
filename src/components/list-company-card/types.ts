export interface IListCompanyCard {
  companies: string[];
  getByCompanyName: boolean;
  isActiveCompany: (companyName: string) => boolean;
  handleActiveCompany: (companyName: string) => void;
}
