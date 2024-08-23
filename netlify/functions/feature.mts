import { Config, Context } from "@netlify/functions";
import { features } from "web-features";

export default async (req: Request, context: Context) => {
  const { feature } = context.params;

  const featureData = features[feature];
  if(!featureData){
    console.log('no feature data');
    return {
      statusCode: 404,
      body: JSON.stringify({ message: "Not Found" }),
    };
  }

  return Response.json({featureData});
};

export const config: Config = {
  path: "/feature/:feature"
};
