import React from 'react'

const Page = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <div>{props.children}</div>
    </div>
  )
}

export default Page
