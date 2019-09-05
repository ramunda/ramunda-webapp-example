import React from 'react';
import { ExternalForm } from 'ramunda'
import {Container } from 'semantic-ui-react'
import Calculate from './Calculate'

export default class Process2FirstTask extends React.Component {

    constructor(props) {
        super(props)

        this.state={
            //object received when we did back in the second task
            process: this.props.location.state ? this.props.location.state.process : null 
        }

        this.onNext = this.onNext.bind(this)
        this.onCancel = this.onCancel.bind(this)
    }

    onNext(process) {
        return process;
    }

    onCancel() {
        this.props.history.push({
            pathname: '/processCanceled',
        })
    }

    render() {
        return (
            <Container>
                <ExternalForm
                    creatInstance={this.state.process ? false : true}
                    process={this.state.process}
                    procDefKey='Process_05r67sz'
                    externalForm={<Calculate />}
                    onNext={this.onNext}
                    onCancel={this.onCancel}
                />
            </Container>)
    }
}