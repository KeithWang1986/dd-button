import * as React from 'react';
import ReactDOM from 'react-dom';
import { PropTypes } from 'prop-types';

class App extends React.Component {
    static propTypes = {
        locale: PropTypes.object
    };

    render() {
        return (
            <div>123</div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));