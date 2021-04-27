import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getEmployeeList } from '../redux/actions/employeeList'
import Employee from './Employee'
import { Grid } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

const Employees = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const employees = useSelector(state => state.employeeList.data)
  const loading = useSelector(state => state.employeeList.loading)
  const error = useSelector(state => state.employeeList.error)
  
  useEffect(() => {
    dispatch(getEmployeeList())
  }, [dispatch, history])
  const employeeList = !loading && employees.length > 0 ? employees.map(employee => {
    return <Grid item xs={6} key={employee.id}><Employee employee={employee}></Employee></Grid>
  }) : <p>No users available</p>
  return (
    <div>{
      loading ? <p>Loading...</p> : error ? <p>{error}</p> : <Grid container spacing={3}>
        {employeeList}
      </Grid>
    }</div>
  )
}

export default Employees
