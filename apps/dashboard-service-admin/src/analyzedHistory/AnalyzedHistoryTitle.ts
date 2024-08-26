import { AnalyzedHistory as TAnalyzedHistory } from "../api/analyzedHistory/AnalyzedHistory";

export const ANALYZEDHISTORY_TITLE_FIELD = "id";

export const AnalyzedHistoryTitle = (record: TAnalyzedHistory): string => {
  return record.id?.toString() || String(record.id);
};
