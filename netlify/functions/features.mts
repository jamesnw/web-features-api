import { Config, Context } from "@netlify/functions";
import { features, groups, snapshots } from "web-features";

export default async (req: Request, context: Context) => {
  return Response.json({features});
};

export const config: Config = {
  path: "/feature"
};
