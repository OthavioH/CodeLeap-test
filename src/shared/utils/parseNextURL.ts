// parse this string and get the limit and offset https://dev.codeleap.co.uk/careers/?limit=10&offset=10"

import INextParameters from "../types/NextParameters";

export default function parseNextURL(url: string): INextParameters {
  const urlParams = new URLSearchParams(url.split("?")[1]);
  const limit = parseInt(urlParams.get("limit") || "10");
  const offset = parseInt(urlParams.get("offset") || "0");

  return { limit, offset };
}
