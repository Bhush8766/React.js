import React from 'react'

const Dashboard = ({ loggedUser }) => {

  if (!loggedUser) {
    return <h2>Dashboard </h2>
  }

  return (
    <div>
      Welcome {loggedUser.userName} 🎉
    </div>
  )
}

export default Dashboard