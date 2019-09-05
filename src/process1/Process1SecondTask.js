import React from 'react';
import { DefaultForm } from 'ramunda'

export default class Process1SecondTask extends React.Component {

    constructor(props) {
        super(props)

        this.onNext = this.onNext.bind(this)
        this.onBack = this.onBack.bind(this)
        this.onCancel = this.onCancel.bind(this)
    }

    onNext(process) {
        this.props.history.push({
            pathname: '/'
        })
    }

    onBack(process) {
        this.props.history.push({
            pathname: '/process1/firstTask',
            state: { process: process }
        })
    }

    onCancel() {
        this.props.history.push({
            pathname: '/processCanceled',
        })
    }

    render() {
        return (<DefaultForm process={this.props.location.state.process}
            onBack={this.onBack}
            onNext={this.onNext}
            onCancel={this.onCancel} />)
    }
}