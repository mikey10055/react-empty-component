import React, {Component} from 'react';

import './EmptyComponent.css';

class EmptyComponent extends Component {
    constructor(props) {
        super(props);

        this.env = props.env;

        this.state = {}
    }

    componentDidMount() {
        this._ismounted = true;
    }

    componentDidUnMount() {
        this._ismounted = false;
    }

    render() {
        return (
            <div className="emptyComponent"></div>
        );
    }
}

EmptyComponent.defaultProps = {
    env: 'local'
}

export default EmptyComponent;
