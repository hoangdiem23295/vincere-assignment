import * as type from '../types'

const initialState = {
  data: [],
  loading: false,
  error: null
}

export default function employeeList(state = initialState, action) {
  switch (action.type) {
    case type.GET_EMPLOYEELIST_REQUESTED:
      return {
        ...state,
        loading: true
      }
    case type.GET_EMPLOYEELIST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.employeeList
      }
    case type.GET_EMPLOYEELIST_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message
      }
    default:
      return state
  }
}