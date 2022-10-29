import { Job } from "../entities/Job";

export interface IJobRepository {
  getAllJobs: () => Promise<Job[]>;
}
