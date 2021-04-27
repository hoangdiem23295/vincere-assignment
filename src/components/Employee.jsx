import { Card, CardContent, Typography, Avatar } from '@material-ui/core'
import React from 'react'
import Moment from 'react-moment'
import { useHistory } from "react-router-dom"

const Employee = (props) => {
  let history = useHistory()
  const { employee } = props

  function redirectDetailPage() {
    history.push(`/employeeDetail/${employee.id}`)
  }

  return (
    <div>
      <Card onClick={redirectDetailPage}>
        <CardContent className="employee">
          <div className="employee__avatar">
            <Avatar variant="square" src={employee.avatar} style={{ height: '100px', width: '100px' }}></Avatar>
          </div>
          <div className="employee__content">
            <Typography className="employee__title">
              <b>ID: </b>{employee.id}</Typography>
            <Typography><b>Name: </b>{employee.name}</Typography>
            <Typography><b>Position: </b>{employee.position}</Typography>
            <Typography>
              <b>Created Date: </b>
              <Moment format="YYYY/MM/DD hh:mm">
                {employee.createAt}
              </Moment>
            </Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Employee