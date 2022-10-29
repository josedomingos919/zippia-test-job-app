import { NextApiResponse } from "next";
import { IJob } from "../../src/types";

export type JobsDataType = {
  jobs: IJob[];
};

export interface IUseTestState {
  jobsData: JobsDataType;
}

export interface IJobs {
  jobsData: JobsDataType;
}

export interface IServerSideProps {
  res: NextApiResponse;
}
