import React from 'react'

function ReposItem({name, linkToRepo, fullName}) {
  return (
    <div>
        <h2>{name}</h2>
        <h4>Full name:</h4>
        <a href={linkToRepo} target="_black" rel="noreferrer">{fullName}</a>
    </div>
  )
}

export default ReposItem
