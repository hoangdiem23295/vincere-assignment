import { all } from 'redux-saga/effects'
import employeeList from './employeeListSaga'

export default function* rootSaga() {
  yield all([
    employeeList()
  ])
}