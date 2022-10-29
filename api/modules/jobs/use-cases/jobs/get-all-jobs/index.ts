import { AxiosJobRepository } from "../../../repositories/implementation/AxiosJobRepository";
import { GetAllJobsController } from "./get-all-jobs-controller";
import { GetAllJobsUseCase } from "./get-all-jobs-use-case";

const axiosJobRepository = new AxiosJobRepository();

const getAllJobsUseCase = new GetAllJobsUseCase(axiosJobRepository);

const getAllJobsController = new GetAllJobsController(getAllJobsUseCase);

export { getAllJobsController };
