import { AnalyzedHistoryWhereInput } from "./AnalyzedHistoryWhereInput";
import { AnalyzedHistoryOrderByInput } from "./AnalyzedHistoryOrderByInput";

export type AnalyzedHistoryFindManyArgs = {
  where?: AnalyzedHistoryWhereInput;
  orderBy?: Array<AnalyzedHistoryOrderByInput>;
  skip?: number;
  take?: number;
};
