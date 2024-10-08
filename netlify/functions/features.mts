import { Config, Context } from "@netlify/functions";
import { features } from "web-features";

export default async (req: Request, context: Context) => {
  return Response.json(features);
};

export const config: Config = {
  path: "/feature"
};
