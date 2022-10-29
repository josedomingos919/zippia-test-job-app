export class Job {
  public readonly jobId?: string;

  public jobTitle?: string;
  public companyID?: number;
  public companyName?: string;
  public companyLogo?: string;
  public companyInitial?: string;
  public jobDescription?: string;

  constructor(props: Omit<Job, "jobId">) {
    Object.assign(this, props);
  }
}
