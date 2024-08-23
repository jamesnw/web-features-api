import { Config, Context } from "@netlify/functions";
import { features, groups, snapshots } from "web-features";

export default async (req: Request, context: Context) => {
  return Response.json({features: Object.keys(features), groups: Object.keys(groups), snapshots: Object.keys(snapshots)});
};

export const config: Config = {
  path: "/keys/"
};
