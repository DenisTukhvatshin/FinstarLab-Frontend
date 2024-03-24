import React from 'react';

class CodeValue extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      codeValue: [],
    };
  }

  componentDidMount() {
    fetch('https://localhost:7066/CodeValue/GetAll')
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            this.setState({ codeValue: data });
         })
         .catch((err) => {
            console.log(err.message);
         });
  }

  render() {
    return (
      <div>
        <h1>CodeValue</h1>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Code</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {this.state.codeValue.map(codeValue => (
              <tr key={codeValue.id}>
                <td>{codeValue.id}</td>
                <td>{codeValue.code}</td>
                <td>{codeValue.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CodeValue;