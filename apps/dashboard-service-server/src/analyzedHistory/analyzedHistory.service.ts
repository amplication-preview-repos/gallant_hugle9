import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AnalyzedHistoryServiceBase } from "./base/analyzedHistory.service.base";

@Injectable()
export class AnalyzedHistoryService extends AnalyzedHistoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
