import React from 'react';
import {connect} from 'react-redux'
import SheltersContainer from './containers/SheltersContainer'
import './App.css';

class App extends React.Component {

  componentDidMount(){
  }

  render() {
    return(
      <div className="App">
        App
        <SheltersContainer />
      </div>
    )
  }
}


export default connect()(App)
