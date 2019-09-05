import React from 'react';
import { ExternalForm } from 'ramunda'
import {Container } from 'semantic-ui-react'
import InvoiceList from './InvoicesList'

const initVariables=[
    {key: "clientDetails",value: {nif: 263884166, personId: '111111',emai: 'teste@mail.com'}},
    {key:'client', value: '263884166'},
    {key:'user', value:'user123'}
]

export default class Process4FirstTask extends React.Component {

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
            pathname: '/process4/secondTask',
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
                <ExternalForm
                    creatInstance={this.state.process ? false : true}
                    process={this.state.process}
                    procDefKey='Process_08rb4ct'
                    variables={initVariables}
                    externalForm={<InvoiceList />}
                    onNext={this.onNext}
                    onCancel={this.onCancel}
                />
            </Container>)
    }
}