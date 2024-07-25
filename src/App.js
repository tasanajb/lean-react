import React, { Component } from 'react'
import "./App.css";
import Clock from './Clock';

class CMEntry extends Component {
  render() {
    //Destructuring
    const { label, default_value } = this.props;
  
    return (
      <div>
        <label className='label' htmlFor="fname">{label}</label><br />
        <input type="text" id="fname" name="fname" defaultValue={default_value} /> <br />
      </div>
    )
  }
}


export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      count:0,
      first_name: "Jan",
      last_name:"namm"
    }

    //ตั้งเวลาทำงาน
    setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000)
  }
  render() {
    return (
      //JSX
      <div style={{padding:50}}>
        <h1 className='App'>Login</h1>
        <Clock count={this.state.count} />
        <form>
          <CMEntry label="First name" default_value={this.state.first_name} />
          <br/>
          <CMEntry label="Last name" default_value={this.state.last_name}/>
          <br /><br />
          <input type="submit" defaultValue="Submit" onClick={() => {
            this.setState.first_name = "22222";
          }} />
        </form>
      </div>
    )
  }
}
