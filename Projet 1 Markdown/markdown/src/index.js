import React from 'react';

import { render } from 'react-dom';
//css 
import './style/css/bootstrap.min.css';
import './index.css';
import



class App extends React.Component {
    render(){
        return (
            <div className="container">
                <div className ="row">

                 <div className="col-sm-6">
                 <textarea value="Entrez votre markdown" rows="35" className="form-control">
                 
                 
                 </textarea>   
                 </div>

                </div>
                   <div className="col-sm-6">
                 <textarea>
                 <h1>Resultats</h1>
                 
                 </textarea>   
                 </div>
            </div>
        )
    }
}



render(
    <App />,
    document.getElementById('root')
);