import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import express from "express";
import { registerRoutes } from "../../server/routes";

// Create Express app
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Register your routes
registerRoutes(app);

// Netlify function handler
export const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  return new Promise((resolve) => {
    const { httpMethod, path, body, headers, queryStringParameters } = event;
    
    // Convert Netlify event to Express request format
    const req = {
      method: httpMethod,
      url: path,
      body: body ? JSON.parse(body) : {},
      headers: headers || {},
      query: queryStringParameters || {},
    } as any;

    const res = {
      statusCode: 200,
      headers: {},
      body: "",
      json: (data: any) => {
        res.body = JSON.stringify(data);
        res.headers = { ...res.headers, "Content-Type": "application/json" };
      },
      status: (code: number) => {
        res.statusCode = code;
        return res;
      },
      send: (data: any) => {
        res.body = data;
      },
    } as any;

    // Handle the request
    app(req, res, () => {
      resolve({
        statusCode: res.statusCode,
        headers: res.headers,
        body: res.body,
      });
    });
  });
};
