import type { NextApiRequest, NextApiResponse } from "next";

import { GetAllJobsUseCase } from "./get-all-jobs-use-case";
import { ResponseGetAllJobsController } from "./types";

export class GetAllJobsController {
  constructor(private getAllJobsUseCase: GetAllJobsUseCase) {}

  async handle(
    request: NextApiRequest,
    response: NextApiResponse<ResponseGetAllJobsController>
  ) {
    if (request.method !== "GET")
      return response.status(405).json({
        message: "Method not allowed",
      });

    try {
      const jobs = await this.getAllJobsUseCase.execute();

      response.status(200).json(jobs);
    } catch (err) {
      response.status(400).json({
        message: "unexpected error",
      });
    }
  }
}
