import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AnalyzedHistoryService } from "./analyzedHistory.service";
import { AnalyzedHistoryControllerBase } from "./base/analyzedHistory.controller.base";

@swagger.ApiTags("analyzedHistories")
@common.Controller("analyzedHistories")
export class AnalyzedHistoryController extends AnalyzedHistoryControllerBase {
  constructor(protected readonly service: AnalyzedHistoryService) {
    super(service);
  }
}
