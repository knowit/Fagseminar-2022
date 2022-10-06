import type { TimeRecord } from "../models/airtable";

export async function getData() {
  const airtableUrl =
    "https://api.airtable.com/v0/appYSYbiE8bAuHro3/innsendte_foredrag_new_site?view=Grid%20view";
  return await fetch(airtableUrl, {
    headers: { Authorization: "Bearer key2Fr5HlESWRuuzx" },
  })
    .then((response) => response.json())
    .then((json: { records: TimeRecord[] }) =>
      json.records.filter((record) => record.fields.title !== "Dummy")
    );
}
