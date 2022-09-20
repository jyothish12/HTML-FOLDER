import React  from 'react'
import Class1 from "./Class1"
 class Class extends React.Component {
    name="jyothish"
    salary=23000
    age=30
  render() {
    return (
      <div>
      <Class1/>
      <h1>EMPLOYEE_NAME:{this.name}</h1>
      <h1>EMPLOYEE_AGE:{this.salary}</h1>
      <h1>EMPLOYEE_AGE:{this.age}</h1>
      </div>
    )
  }
}

export default Class