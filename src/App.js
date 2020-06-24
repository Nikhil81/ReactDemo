import React, { Component } from "react";

import axios from "axios";

import Message from "./components/Message/Message";
import UserGrid  from './components/UserGrid/UserGrid';
import Button from './components/Common/Button/Button';

class App extends Component {
  state = { counter: 0, userData: [] };
  async componentDidMount() {
    
    // axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
    //     //return response
    //   }).catch(err => err);
    //   console.log(data);
    //const newPromise = new Promise((resolve,reject) =>{});

    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      
      this.setState({ userData: data });
    } catch (error) {}
  }

  onChangeHandler = () => {
    this.setState((prvState) => ({
      ...prvState,
      counter: prvState.counter + 1,
    }));
  };

  render() {
    const { userData } = this.state; 

    return (
      <div className="container">
        <div className="jumbotron">
          <Message />
        </div>
        {/* <button className="btn btn-success my-2" onClick={this.onChangeHandler}>
          Update Counter
        </button> */}
        <Button onClickHandler={this.onChangeHandler} value="Manage User" defaultClass="my-2"  />
       <UserGrid userGridData={userData}/>
      </div>
    );
  }
}

export default App;
