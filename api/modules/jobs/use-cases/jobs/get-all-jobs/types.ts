import { Job } from "../../../entities/Job";

export type ResponseGetAllJobsController = Job[] | { message: string };
