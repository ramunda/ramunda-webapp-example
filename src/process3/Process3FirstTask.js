import React from 'react';
import { CustomForm } from 'ramunda'
import {Container } from 'semantic-ui-react'
import ramundaOptions from './process3Options.json'

export default class Process3FirstTask extends React.Component {
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
        this.props.history.push({
            pathname: '/process3/secondTask',
            state: { process: process }
        })
    }

    onCancel() {
        this.props.history.push({
            pathname: '/processCanceled',
        })
    }

    render() {
        return (
            <Container>
                <CustomForm
                    creatInstance={this.state.process ? false : true}
                    process={this.state.process}
                    procDefKey='Process_02jaj7t'
                    options={ramundaOptions.firstTask}
                    onNext={this.onNext}
                    onCancel={this.onCancel}
                />
            </Container>)
    }
}
