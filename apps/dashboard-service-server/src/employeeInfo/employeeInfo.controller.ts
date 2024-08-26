import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EmployeeInfoService } from "./employeeInfo.service";
import { EmployeeInfoControllerBase } from "./base/employeeInfo.controller.base";

@swagger.ApiTags("employeeInfos")
@common.Controller("employeeInfos")
export class EmployeeInfoController extends EmployeeInfoControllerBase {
  constructor(protected readonly service: EmployeeInfoService) {
    super(service);
  }
}
