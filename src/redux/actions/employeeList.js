import * as type from '../types'

export function getEmployeeList(employeeList) {
  return {
    type: type.GET_EMPLOYEELIST_REQUESTED,
    payload: employeeList
  }
}