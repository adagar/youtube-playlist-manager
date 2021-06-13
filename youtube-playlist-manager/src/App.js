import React from 'react';
import './App.css';
import Login from './Components/Login';
import Logout from './Components/Logout';
import { UserContext } from './user-context';
import {refreshTokenSetup} from './utils/refreshToken';


class App extends React.Component{
  constructor(props) {
    super(props);

    this.initUser = (res) => {
      console.log('[LOGIN SUCCESS] currentUser:', res.profileObj);
      this.setState((state, props) => {
        return {user: res.profileObj.name}
      })

      refreshTokenSetup(res);
    } 


    this.state = {
      user: null,
      initUser: this.initUser,
    }
  }

  render() {
    return (
      <div className="App">
        <UserContext.Provider value={this.state}>
          <Login />
          <h1>USER: {this.state.user}</h1>
          <Logout />
        </UserContext.Provider>
      </div>
    );
  }
  
}

export default App;
