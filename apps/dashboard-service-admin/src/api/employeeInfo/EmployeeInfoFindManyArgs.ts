import { EmployeeInfoWhereInput } from "./EmployeeInfoWhereInput";
import { EmployeeInfoOrderByInput } from "./EmployeeInfoOrderByInput";

export type EmployeeInfoFindManyArgs = {
  where?: EmployeeInfoWhereInput;
  orderBy?: Array<EmployeeInfoOrderByInput>;
  skip?: number;
  take?: number;
};
