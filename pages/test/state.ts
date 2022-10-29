import { useCallback, useEffect, useState } from "react";
import { IJob } from "../../src/types";

export const useTestState = () => {
  const [jobs, setJobs] = useState<IJob[]>([]);
  const [companies, setCompanies] = useState<string[]>([]);
  const [activeCompanies, setActiveCompanies] = useState<string[]>([]);
  const [getByCompanyName, setGetByCompanyName] = useState(false);
  const [isLastSevenDays, setIsLastSevenDays] = useState(false);

  const handleGetJobs = async () => {
    const response = await fetch("http://localhost:3000/api/jobs");

    const data = await response.json();

    setJobs(data?.jobs || []);
  };

  const handleGetCompanies = useCallback(() => {
    const companies = jobs
      .map(({ companyName = "" }) => companyName)
      .filter((companyName, index, self) => self.indexOf(companyName) == index);

    setCompanies(companies);
  }, [jobs]);

  const handleGetJobsByLastSevenDays = () => {
    setIsLastSevenDays((prevState) => !prevState);
  };

  const handleGetJobsByCompanyName = () => {
    setGetByCompanyName((prevState) => !prevState);
  };

  const handleClearSelectedCompanies = () => {
    setActiveCompanies([]);
  };

  const handleActiveCompany = (companyName = "") => {
    if (activeCompanies.includes(companyName)) {
      setActiveCompanies((prevState) =>
        prevState.filter(
          (existingCompanyName) => existingCompanyName !== companyName
        )
      );
    } else {
      setActiveCompanies((prevState) => [companyName, ...prevState]);
    }
  };

  const isActiveCompany = (companyName = "") => {
    return activeCompanies.includes(companyName);
  };

  const getFilteredJobs = () => {
    return jobs.filter(({ companyName = "" }) => {
      if (
        getByCompanyName &&
        activeCompanies?.length &&
        !activeCompanies.includes(companyName)
      )
        return false;

      return true;
    });
  };

  useEffect(() => {
    handleGetJobs();
  }, []);

  useEffect(() => {
    if (!getByCompanyName) handleClearSelectedCompanies();
  }, [getByCompanyName]);

  useEffect(() => {
    handleGetCompanies();
  }, [jobs, handleGetCompanies]);

  return {
    companies,
    isActiveCompany,
    isLastSevenDays,
    getByCompanyName,
    handleActiveCompany,
    jobs: getFilteredJobs(),
    handleGetJobsByCompanyName,
    handleGetJobsByLastSevenDays,
  };
};
