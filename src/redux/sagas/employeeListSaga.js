import { call, put, takeEvery } from 'redux-saga/effects'

const apiUrl = 'https://5d64d48426046800144d78fa.mockapi.io/employee'

function getApi() {
  return fetch(apiUrl, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json'
    }
  }).then(res => res.json())
  .catch(error => {throw error})
}

function* fetchEmployeeList(action) {
  try {
    const list = yield call(getApi)
    yield put({
      type: 'GET_EMPLOYEELIST_SUCCESS',
      employeeList: list
    })
  } catch (err) {
    yield put({
      type: 'GET_EMPLOYEELIST_FAILED',
      message: err.message
    })
  }
}

function* employeeList() {
  yield takeEvery('GET_EMPLOYEELIST_REQUESTED', fetchEmployeeList)
}

export default employeeList