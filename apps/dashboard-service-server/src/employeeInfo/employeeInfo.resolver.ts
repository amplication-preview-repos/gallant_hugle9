import * as graphql from "@nestjs/graphql";
import { EmployeeInfoResolverBase } from "./base/employeeInfo.resolver.base";
import { EmployeeInfo } from "./base/EmployeeInfo";
import { EmployeeInfoService } from "./employeeInfo.service";

@graphql.Resolver(() => EmployeeInfo)
export class EmployeeInfoResolver extends EmployeeInfoResolverBase {
  constructor(protected readonly service: EmployeeInfoService) {
    super(service);
  }
}
