import { Module } from "@nestjs/common";
import { AnalyzedHistoryModuleBase } from "./base/analyzedHistory.module.base";
import { AnalyzedHistoryService } from "./analyzedHistory.service";
import { AnalyzedHistoryController } from "./analyzedHistory.controller";
import { AnalyzedHistoryResolver } from "./analyzedHistory.resolver";

@Module({
  imports: [AnalyzedHistoryModuleBase],
  controllers: [AnalyzedHistoryController],
  providers: [AnalyzedHistoryService, AnalyzedHistoryResolver],
  exports: [AnalyzedHistoryService],
})
export class AnalyzedHistoryModule {}
