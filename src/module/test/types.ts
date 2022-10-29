import { IJob } from "../../types";

export type JobsDataType = {
  jobs: IJob[];
};

export interface IUseTestState {
  jobsData: JobsDataType;
}

export interface IJobs {
  jobsData: JobsDataType;
}
