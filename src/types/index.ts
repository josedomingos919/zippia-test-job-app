export interface IJob {
  readonly jobId?: string;

  jobTitle?: string;
  companyID?: number;
  companyName?: string;
  companyLogo?: string;
  companyInitial?: string;
  jobDescription?: string;
  postingDate?: string;
  postedDate?: string;
}
