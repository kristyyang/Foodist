import React, { Component } from 'react'

class AddRes extends Component {
  state = {
    name: null,
    address: null,
    start_date: null,
    end_date:null
  }
  handleChange = (e) => {
    // console.log(e.target.id, e.target.value);
    this.setState({
      [e.target.id]: e.target.value
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" onChange={this.handleChange} />
          <label htmlFor="Address">Address:</label>
          <input type="text" id="address" onChange={this.handleChange} />
          <label htmlFor="start_date">Start_Date:</label>
          <input type="text"id="start_date" onChange={this.handleChange} />
          <label htmlFor="end_date">End_Date:</label>
          <input type="text"id="end_date" onChange={this.handleChange} />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default AddRes
