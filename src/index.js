import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './components/Main.js';
import 'font-awesome/css/font-awesome.min.css';
class Landing extends React.Component {
    render() {
        return(
                <Main/>
        )
    }
}

ReactDOM.render(<Landing />, document.getElementById('root'));