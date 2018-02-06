import * as React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button.jsx';

class App extends React.Component {
    render() {
        return (
            <Button />
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));