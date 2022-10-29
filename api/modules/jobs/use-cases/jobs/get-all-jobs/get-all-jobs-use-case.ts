import { IJobRepository } from "../../../repositories/IJobRepository";

export class GetAllJobsUseCase {
  constructor(private jobRepository: IJobRepository) {}

  async execute() {
    return this.jobRepository.getAllJobs();
  }
}
