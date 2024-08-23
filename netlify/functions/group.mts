import { Config, Context } from "@netlify/functions";
import { groups } from "web-features";

export default async (req: Request, context: Context) => {
  const { group } = context.params;

  const groupData = groups[group];

  return Response.json(groupData);
};

export const config: Config = {
  path: "/feature/:group"
};
