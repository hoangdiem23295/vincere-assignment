import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getEmployeeList, resetEmployeeList } from '../redux/actions/employeeList'
import Employee from './Employee'
import { Grid } from '@material-ui/core'
import { useHistory, useLocation } from 'react-router-dom'
import Page from '../common/Page'

const Employees = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()
  const employees = useSelector(state => state.employeeList.data)
  const loading = useSelector(state => state.employeeList.loading)
  const pathName = location.pathname === '' || location.pathname === '/'

  useEffect(() => {
    dispatch(getEmployeeList())
  }, [dispatch, history])
  useEffect(() => {
    return () => {
      dispatch(resetEmployeeList())
    };
  }, [])
 
  return (
    <Page title={pathName && 'Employee List'}>
      <p>{loading && employees.length===0 && 'Loading...'}</p>
      <Grid container spacing={3}>{(!loading && employees && employees.length > 0) && employees.map(employee => {
        return <Grid item xs={6} key={employee.id}><Employee employee={employee}></Employee></Grid>
      })}</Grid>
      <p>{(!loading && employees && employees.length === 0) && 'No employee in list'}</p>
    </Page>
  )
}

export default Employees
