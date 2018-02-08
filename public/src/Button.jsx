import * as React from 'react';
import ReactDOM from 'react-dom';
import { PropTypes } from 'prop-types';
import { LocaleValue } from 'dd-locale';

import './css/button.css';

export class Button extends React.Component {
    static propTypes = {
        onClick: PropTypes.func,
        value: PropTypes.string.isRequired
    };

    static contextTypes = {
        locale: PropTypes.object.isRequired
    };

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <button className="dd-button" type="button" onClick={(e) => { if (this.props.onClick) { this.props.onClick(this.props, e) } }}>{LocaleValue(this.context.locale, this.props.value)}</button>
        );
    }
}