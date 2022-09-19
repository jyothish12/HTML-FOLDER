import React from 'react'
class Class1 extends React.Component {
    name=["jyothish","teja","chinni"]
    salary=[10000,20000,30000]
      render() {

    return (
      <div>
      <h1>NAME:{this.name[0]}</h1>
      <h1>SALARY:{this.salary[0]}</h1>
      <h1>NAME:{this.name[1]}</h1>
      <h1>SALARY:{this.salary[2]}</h1>
      <h1>NAME:{this.name[2]}</h1>
      <h1>SALARY:{this.salary[1]}</h1>
      </div>
    )
  }
}

export default Class1