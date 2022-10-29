import { useEffect, useState } from "react";
import { IJob } from "./types";

export const useTestState = () => {
  const [jobs, setJobs] = useState<IJob[]>();

  const handleGetJobs = async () => {
    const response = await fetch("http://localhost:3000/api/jobs");

    const data = await response.json();

    setJobs(data?.jobs || []);
  };

  useEffect(() => {
    handleGetJobs();
  }, []);

  return { jobs };
};
