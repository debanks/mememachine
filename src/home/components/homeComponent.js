import React, {Component, PropTypes} from 'react';
import classnames from 'classnames';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import DocumentMeta from 'react-document-meta';
import CompetitionBanner from './CompetitionBanner';
import {helper} from "react-stockcharts";
import NumberFormat from '../../services/NumberFormat';
let {fitWidth} = helper;

class HomeComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            skill: 'all'
        }
    }

    componentWillMount() {
        this.props.loadContent();
    }

    render() {
        const {className, competitions, polls, results} = this.props;
        const meta = {
            title: 'Meme Machine',
            description: 'Our groups annual competition throughout the years.',
            canonical: 'http://mememachine.com',
            meta: {
                charset: 'utf-8',
                name: {
                    keywords: 'meme,delta,poptart,garho,foo,minirr'
                }
            }
        };

        return (
            <DocumentMeta {...meta}>
                <div className={classnames('HomeComponent', className)}>
                    <Grid className="top-section">
                        <Row>
                            <Col md={8}>
                                <h1>Meme Machine Competition</h1>
                                <p>
                                    Welcome to the home of our yearly competition where we track and vote on various
                                    aspects of our yearly competition.
                                </p>
                            </Col>
                            <Col md={4}>
                                <div className="results-table">
                                    <div className="results-header">Lifetime Results</div>
                                    <Grid className="scores">
                                        {results.map(function (result, key) {
                                            return <Row key={key}>
                                                <Col xs={8}>
                                                    {result.name}
                                                </Col>
                                                <Col xs={4} className="align-right numbers">
                                                    {NumberFormat.format(result.score, "float", 0)}
                                                </Col>
                                            </Row>;
                                        })}
                                    </Grid>
                                </div>
                            </Col>
                        </Row>
                    </Grid>
                    <div className="flex-header">Competitions <Button href="/competitions">View All</Button></div>
                    <div className="flex-cols">
                        {competitions.map(function (competition, key) {
                            return <CompetitionBanner competition={competition} key={key}/>
                        })}
                    </div>
                </div>
            </DocumentMeta>
        )
    }
}

HomeComponent = fitWidth(HomeComponent);

export default HomeComponent;
