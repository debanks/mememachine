import React, {Component, PropTypes} from 'react';
import classnames from 'classnames';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import DocumentMeta from 'react-document-meta';
import CompetitionBanner from './CompetitionBanner';
import {helper} from "react-stockcharts";
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
        const {className, competitions, polls} = this.props;
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
                    {competitions.map(function(competition, key) {
                        return <CompetitionBanner competition={competition} key={key}/>
                    })}
                </div>
            </DocumentMeta>
        )
    }
}

HomeComponent = fitWidth(HomeComponent);

export default HomeComponent;
