import { Config, Context } from "@netlify/functions";
import { features } from "web-features";

const CORS_HEADERS = {
  headers: {
    "Access-Control-Allow-Origin": "*",
  }
};
export default async (req: Request, context: Context) => {
  const response = await context.next();
  // You need this if you are calling this from the browser
	// to handle CORS preflight stuff
	if (req.method === "OPTIONS") {
		return new Response("ok", CORS_HEADERS);
	}

  const { feature } = context.params;

  const featureData = features[feature];
  if (!featureData) {
    console.log("no feature data");
    return Response.json({ message: "Not Found" }, {
      status: 404,
      ...CORS_HEADERS
    });
  }

  return Response.json(featureData, CORS_HEADERS);
};

export const config: Config = {
  path: "/feature/:feature",
};
