import React, { Component } from 'react';
import './App.css';
import ElectionResults from './components/electionresults/ElectionResults';
import Maps from './components/maps/Maps';
import Dropdowns from'./components/query/Dropdowns';
// import ResultsData from './data/ElectionResultsData';
import StatesData from './data/StateElection.js';
// import VAData from './data/VAElectionData';

class App extends Component {
  constructor(props) {
   super(props);
   this.state = {
     states: StatesData,
     StateData: null,
     ElectionData: null
   }

 }

 getSubmitData = function(selectedState, selectedElection){
        this.setState({StateData: selectedState,
                    ElectionData: selectedElection})
   }

  render() {
    return (
      <div className="App">
        <h1 className="AppTitle">Election Night Reporting</h1>
        <Dropdowns states={this.state.states} getSubmitData={this.props.getSubmitData}/>
        <ElectionResults />
        <Maps />
      </div>
    )
  }
}

export default App;
