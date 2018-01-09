import React, { Component } from 'react';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';
import Clock from "./Clock";

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            deadLine:'December 25, 2017',
            newDeadLine: ''
        }
    }

    changeDeadLine(){
        this.setState({deadLine: this.state.newDeadLine});
    }

    render() {
        return (
            <div className="App">
                <div className="App-title">
                    Countdown to {this.state.deadLine}
                </div>
            <div>
                <Clock
                    deadLine={this.state.deadLine}
                />
            </div>
                <Form inline>
                    <FormControl
                        className="Deadline-input"
                        placeholder="New Date"
                        onChange={event => this.setState({newDeadLine: event.target.value})}
                    />
                    <Button onClick={() => this.changeDeadLine()}>
                        Submit
                    </Button>
                </Form>

            </div>


            )

    }
}
export default App;
