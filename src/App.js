import React, { Component } from "react";

import axios from "axios";
import { Message, UserGrid, Button } from "./components";
import Layout from "./hoc/Layout/Layout";

class App extends Component {
  
  state = { counter: 0, userData: [] };
  async componentDidMount() {
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
      <Layout>
        <div className="container">
          <div className="jumbotron">
            <Message />
          </div>
          <Button
            onClickHandler={this.onChangeHandler}
            value="Manage User"
            defaultClass="my-2"
          />
          <UserGrid userGridData={userData} />
        </div>
      </Layout>
    );
  }
}

export default App;
