import React, {Component, PropTypes} from 'react';
import classnames from 'classnames';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import {helper} from "react-stockcharts";
let {fitWidth} = helper;

class CompetitionBanner extends Component {

    render() {
        const {className, competition} = this.props;

        return (
            <div className={classnames('CompetitionBanner', className)}>
                <h2>{competition.name}</h2>
                <p>{competition.description}</p>
                <div className="date">{competition.start_date} - {competition.end_date}</div>
            </div>
        )
    }
}

CompetitionBanner = fitWidth(CompetitionBanner);

export default CompetitionBanner;
