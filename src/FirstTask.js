import React from 'react';
import { DefaultForm, DefaultAndRadioButtonsForm } from 'ramunda'
import ramundaOptions from './ramundaOptions.json'

const initProcessVars = [{ key: 'user', value: 'test' }]

export default class FirstTask extends React.Component {

    constructor(props) {
        super(props)

        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(process) {
        this.props.history.push({
            pathname: '/secondTask',
            state: { process: process }
        })
    }

    render() {
        return (<DefaultForm
            creatInstance='true'
            procDefKey='Process_05r67sz'
            variables={initProcessVars}
            //options={ramundaOptions.firstTask}
            onSubmit={(process) => this.onSubmit(process)} />)
    }
}
