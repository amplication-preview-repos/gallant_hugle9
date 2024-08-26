import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EmployeeInfoServiceBase } from "./base/employeeInfo.service.base";

@Injectable()
export class EmployeeInfoService extends EmployeeInfoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
