import * as graphql from "@nestjs/graphql";
import { AnalyzedHistoryResolverBase } from "./base/analyzedHistory.resolver.base";
import { AnalyzedHistory } from "./base/AnalyzedHistory";
import { AnalyzedHistoryService } from "./analyzedHistory.service";

@graphql.Resolver(() => AnalyzedHistory)
export class AnalyzedHistoryResolver extends AnalyzedHistoryResolverBase {
  constructor(protected readonly service: AnalyzedHistoryService) {
    super(service);
  }
}
