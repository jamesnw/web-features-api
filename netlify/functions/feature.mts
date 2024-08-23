import { Config, Context } from "@netlify/functions";
import { features } from "web-features";

export default async (req: Request, context: Context) => {
  const { feature } = context.params;

  const featureData = features[feature];
  if(!featureData){
    console.log('no feature data');
      return Response.json(JSON.stringify({ message: "Not Found" }), {status: 404});
    };
  }

  return Response.json({featureData});
};

export const config: Config = {
  path: "/feature/:feature"
};
