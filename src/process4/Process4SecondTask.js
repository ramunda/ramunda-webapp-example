import React from 'react';
import { DefaultForm } from 'ramunda'
import { Container } from 'semantic-ui-react'

export default class Process3SecondTask extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            //object received when we did back in the second task
            process: this.props.location.state ? this.props.location.state.process : null
        }

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
            pathname: '/process4/firstTask',
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
                <DefaultForm
                    process={this.state.process}
                    onNext={this.onNext}
                    onBack={this.onBack}
                    onCancel={this.onCancel}
                />
            </Container>)
    }
}