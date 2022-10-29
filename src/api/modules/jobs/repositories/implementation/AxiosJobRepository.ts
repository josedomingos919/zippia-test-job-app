import { IJobRepository } from "../IJobRepository";
import { axios } from "../../../../client";
import { Job } from "../../entities/Job";

export class AxiosJobRepository implements IJobRepository {
  async getAllJobs() {
    const response = await axios({
      method: "POST",
      url: "/jobs",
      data: {
        companySkills: true,
        dismissedListingHashes: [],
        fetchJobDesc: true,
        jobTitle: "Business Analyst",
        locations: [],
        numJobs: 10,
        previousListingHashes: [],
      },
    });

    response.data.jobs = response?.data?.jobs.map((props: Job) => ({
      jobId: props.jobId,
      jobTitle: props.jobTitle,
      companyID: props.companyID,
      postingDate: props.postingDate,
      companyName: props.companyName,
      companyLogo: props.companyLogo,
      companyInitial: props.companyInitial,
      jobDescription: props.jobDescription,
      postedDate: props.postedDate,
    }));

    return response?.data;
  }
}
