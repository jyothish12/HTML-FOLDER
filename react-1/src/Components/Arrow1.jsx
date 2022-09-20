import React from 'react'

const Arrow1 = () => {
    let name="chinni"
    let salary=10000
    let age=25
    let adress=["nellore","bglr","hyd"]
  return (
    <div>
    <h1>Name:{name}</h1>
    <h1>Salary:{salary}</h1>
    <h1>Age:{age}</h1>
    <h1>Adress:{adress[1]}</h1>
    </div>
  )
}

export default Arrow1