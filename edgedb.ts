import { createClient } from "edgedb";
import createAuth from "@edgedb/auth-nextjs/app";

export const client = createClient({
  // Note: when developing locally you will need to set tls security to
  // insecure, because the development server uses self-signed certificates
  // which will cause api calls with the fetch api to fail.
  tlsSecurity: process.env.NODE_ENV === "development" ? "default" : undefined,
});

export const auth = createAuth(client, {
  baseUrl: "https://super-duper-umbrella-jj5777w4g774fvr-3000.app.github.dev",
});
