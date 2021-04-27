import React from 'react'
import { useHistory, useParams } from 'react-router-dom'

const EmployeeDetail = (props) => {
  const history = useHistory()
  const { id } = useParams()
  return (
    <div>
      <button
          onClick={() => {
            history.push('/');
          }}
      >
          Go back
      </button>
      Employee Detail with ID: {id}
    </div>
  )
}

export default EmployeeDetail
