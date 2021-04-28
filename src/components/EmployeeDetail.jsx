import React from 'react'
import { useHistory, useParams, useLocation } from 'react-router-dom'
import { Button } from '@material-ui/core'
import Page from '../common/Page'

const EmployeeDetail = (props) => {
  const history = useHistory()
  const location = useLocation()
  const { id } = useParams()
  const pathName = location.pathname
  const pagePath = `/employeeDetail/${id}`
  return (
    <Page title={pathName === pagePath && 'Employee Detail'}>
      <Button variant="outlined" onClick={() => {
        history.push('/');
      }}>Go Back
      </Button>
      <p>Employee Detail with ID: {id}</p>
    </Page>
  )
}

export default EmployeeDetail
