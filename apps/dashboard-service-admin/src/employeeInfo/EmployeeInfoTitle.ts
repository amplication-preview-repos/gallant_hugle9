import { EmployeeInfo as TEmployeeInfo } from "../api/employeeInfo/EmployeeInfo";

export const EMPLOYEEINFO_TITLE_FIELD = "id";

export const EmployeeInfoTitle = (record: TEmployeeInfo): string => {
  return record.id?.toString() || String(record.id);
};
