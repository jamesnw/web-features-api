import { Config, Context } from "@netlify/functions";
import { features, groups, snapshots } from "web-features";

export default async (req: Request, context: Context) => {
  const { feature } = context.params;

  const featureData = features[feature];

  return Response.json({featureData});
};

export const config: Config = {
  path: "/feature/:feature/"
};
