import { combineReducers } from 'redux'
import employeeList from './employeeList'
const rootReducer = combineReducers({
  employeeList: employeeList
})

export default rootReducer