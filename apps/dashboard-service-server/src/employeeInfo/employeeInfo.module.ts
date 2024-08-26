import { Module } from "@nestjs/common";
import { EmployeeInfoModuleBase } from "./base/employeeInfo.module.base";
import { EmployeeInfoService } from "./employeeInfo.service";
import { EmployeeInfoController } from "./employeeInfo.controller";
import { EmployeeInfoResolver } from "./employeeInfo.resolver";

@Module({
  imports: [EmployeeInfoModuleBase],
  controllers: [EmployeeInfoController],
  providers: [EmployeeInfoService, EmployeeInfoResolver],
  exports: [EmployeeInfoService],
})
export class EmployeeInfoModule {}
