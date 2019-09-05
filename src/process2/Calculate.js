import React from 'react'
import { Card, Segment, Button } from 'semantic-ui-react'
import CalculatorRow from './CalculatorRow'
import './Calculate.css'
import {withRouter} from 'react-router-dom'

const maxDigits = 15
const firstRow = [
    { name: 'number', value: '7', display: '7' }, { name: 'number', value: '8', display: '8' },
    { name: 'number', value: '9', display: '9' }, { name: 'operation', value: 'back', icon: 'arrow left' }
]
const secondRow = [
    { name: 'number', value: '4', display: '4' }, { name: 'number', value: '5', display: '5' },
    { name: 'number', value: '6', display: '6' }, { name: 'operation', value: 'subtr', display: '-' }
]
const thirdRow = [
    { name: 'number', value: '1', display: '1' }, { name: 'number', value: '2', display: '2' },
    { name: 'number', value: '3', display: '3' }, { name: 'operation', value: 'add', display: '+' }
]
const fourthRow = [
    { name: 'number', value: '0', display: '0' }, { name: 'dot', value: 'dot', display: '.' },
    { name: 'delete', value: 'C', display: 'C' }, { name: 'operation', value: 'equals', display: '=' }
]

class Calculate extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            number: '0',
            n1: '',
            n2: '',
            toSum: true,
            process: this.props.process,
            result: null
        }
    }

    handleDot = () => {
        let currNum = this.state.number
        if (currNum.length + 1 < maxDigits) {
            this.setState({ number: currNum + '.' })
        }
    }

    handleBack = () => {
        let currNum = Number(this.state.number)
        currNum = Math.floor(currNum / 10).toString()
        this.setState({ number: currNum })
    }

    handleDelete = () => {
        this.props.onCancel(this.state.process)
    }

    handleEquals = async () => {
        const stateProcess = this.state.process
        stateProcess.task.parameters.n1.value = this.state.n1
        stateProcess.task.parameters.n2.value = this.state.number
        stateProcess.task.parameters.toSum.value = this.state.toSum
        const process = await this.props.onSubmit(stateProcess, true)
        this.setState({ result: process.task.parameters.result.value, finish: true })
    }

    terminate = async () => {
        await this.props.onSubmit(this.state.process, true)
        this.props.history.push({
            pathname: '/'
        })
    }

    handleNumber = (e, { name, value }) => {
        let currNum = this.state.number
        if (currNum.length < maxDigits) {
            Number(currNum) ? this.setState({ [name]: currNum + value }) : this.setState({ [name]: value })
        }
    }

    handleOperation = (e, { value }) => {
        let currState = this.state
        if (!Number(currState.n1)) {
            this.setState({ toSum: value === 'add' ? true : false, n1: currState.number, number: '0' })
        }
    }

    render() {
        const process = this.props.process ? this.props.process : { task: {} }

        return (
            <div className='interface'>
                {(process || process.task) &&
                    <Card centered className='bords'>
                        <Card.Content extra style={{ paddingTop: '25px' }}>
                            <Segment inverted size='massive' textAlign='right'>
                                {this.state.result ? this.state.result : this.state.number}
                            </Segment>
                            <br />
                            <CalculatorRow
                                row={firstRow}
                                onClickFuntions={{ number: this.handleNumber, operation: this.handleBack }}
                            />
                            <CalculatorRow
                                row={secondRow}
                                onClickFuntions={{ number: this.handleNumber, operation: this.handleOperation }}
                            />
                            <CalculatorRow
                                row={thirdRow}
                                onClickFuntions={{ number: this.handleNumber, operation: this.handleOperation }}
                            />
                            <CalculatorRow
                                row={fourthRow}
                                onClickFuntions={
                                    {
                                        number: this.handleNumber,
                                        operation: this.handleEquals,
                                        delete: this.handleDelete,
                                        dot: this.handleDot
                                    }
                                }
                            />
                        </Card.Content>
                    </Card>}
                {this.state.finish &&
                    <Button floated="right" onClick={this.terminate}>terminate</Button>}
            </div>
        )
    }
}
export default withRouter(Calculate)