
import React, {Component, PropTypes} from 'react';
import classnames from 'classnames';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import {helper} from "react-stockcharts";
let {fitWidth} = helper;

class PollBox extends Component {

    render() {
        const {className, poll} = this.props;

        return (
            <div className={classnames('PollBox', className)}>
                <h2>{poll.name}</h2>
                <p>{poll.description}</p>
                <div className="date">{poll.start_date} - {poll.end_date}</div>
            </div>
        )
    }
}

PollBox = fitWidth(PollBox);

export default PollBox;
