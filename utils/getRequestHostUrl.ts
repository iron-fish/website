import { NextApiRequest } from "next";

export function getRequestHostUrl(headers: NextApiRequest["headers"]) {
  const protocol = headers["x-forwarded-proto"] || "http";
  const originalHost = String(headers["x-forwarded-host"] || headers.host);
  const host = originalHost?.startsWith("localhost:")
    ? originalHost.replace("localhost", "127.0.0.1")
    : originalHost;
  return `${protocol}://${host}`;
}
