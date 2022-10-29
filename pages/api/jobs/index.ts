import type { NextApiRequest, NextApiResponse } from "next";

import { getAllJobsController } from "../../../src/api/modules/jobs/use-cases/jobs/get-all-jobs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  getAllJobsController.handle(req, res);
}
