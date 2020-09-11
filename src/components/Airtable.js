import Airtable from "airtable"
export default new Airtable({ apiKey: process.env.GATSBY_ZIHA_API }).base(
  process.env.GATSBY_ZIHA_BASE
)
