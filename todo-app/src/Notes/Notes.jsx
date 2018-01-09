import React, { Component } from 'react';
import './NoteForm.css';
import PropTypes from 'prop-types';

class Note extends Component{
    constructor(props) {
        super(props);
        this.message = "Hello from the note component!";
    }
    render(props){
        return(
            <div>
                <h1>Holla :p</h1>
            </div>
        )
    }
};

export default Notes;
