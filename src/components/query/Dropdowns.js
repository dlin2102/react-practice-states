import React, { Component } from "react";
import { Button, FormGroup, Input, Form } from 'reactstrap';
import './_dropdowns.css';

class Dropdowns extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedState: null,
      selectedElection: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    console.log(this.props.getSubmitDatas)
  }

  handleChange(e) {
    if(e.target.getAttribute('id') === "stateDropdown"){
      this.setState({
        selectedState: e.target.value
      })
    }else{
      this.setState({
        selectedElection: e.target.value
      })
    }
    // var that = this;
    // setTimeout(function(){console.log(that.state.selectedElection)})
    // setTimeout(function(){console.log(that.state.selectedState)})
  }

  handleSubmit(e) {
    if( this.state.selectedState && this.state.selectedElection ){
      this.props.getSubmitData(this.state.selectedState, this.state.selectedElection);
    }else{
    alert("Please choose an option from both dropdowns")
    }
  }

  render () {
    return (
      <div className="dropdowns">
        <Form>

          <FormGroup>
            <Input type="select" name="stateSelect" id="stateDropdown"  onChange={this.handleChange}>
              <option>Select State</option>
              {this.props.states.states.map( item => <option key={item.id} value={item.abbreviation}>{item.long_name}</option>)}
            </Input>
          </FormGroup>

          <FormGroup>
            <Input type="select" name="electionSelect" id="electionDropdown"  onChange={this.handleChange}>
              <option>Select Election</option>
              {this.props.states.levels.map( item => <option key={item.id} value={item.name}>{item.name}</option>)}
            </Input>
          </FormGroup>

          <Button id="submitbtn" color="primary" onClick={this.handleSubmit}>Submit</Button>
      </Form>

    </div>
    )
  }
}

export default Dropdowns;
