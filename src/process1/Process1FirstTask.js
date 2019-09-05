import React from 'react';
import { DefaultAndRadioButtonsForm } from 'ramunda'
import {Container } from 'semantic-ui-react'
import ramundaOptions from './process1Options.json'

export default class Process1FirstTask extends React.Component {

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
            pathname: '/process1/secondTask',
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
                <DefaultAndRadioButtonsForm
                    creatInstance={this.state.process ? false : true}
                    procDefKey='Process_05r67sz'
                    process={this.state.process}
                    options={ramundaOptions.firstTask}
                    onNext={this.onNext}
                    onCancel={this.onCancel}
                />
            </Container>)
    }
}