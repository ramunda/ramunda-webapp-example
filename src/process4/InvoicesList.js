import React from 'react'
import { Item, Segment, Button, Container } from 'semantic-ui-react'

export default class InvoiceList extends React.Component {

    handleSubmit = async () =>{
        return await this.props.onSubmit(this.props.process,true)
    }

    handleCancel = async () => {
        return await this.props.onCancel(this.props.process)
    }

    render() {
        return (
            <React.Fragment>
                <h4>Invoices</h4>
                <Item.Group divided>
                    {
                        this.props.process.task.parameters.movements.value.map( elem =>
                        <Segment>
                            <Item>
                                <p>
                                    <b>IvoiceId: </b>
                                    <Item.Header>{elem.invoice.id}</Item.Header>
                                </p>
                                <p>
                                    <b>Amount: </b>
                                    <Item.Content>{elem.amount}</Item.Content>
                                </p>
                                <p>
                                    <b>Balance: </b>
                                    <Item.Meta>{elem.balance}</Item.Meta>
                                </p>
                                <p>
                                    <b>Limit payment date: </b>
                                    <Item.Extra>{new Date(elem.paymentLimitDate).toLocaleDateString()}</Item.Extra>
                                </p>
                            </Item>
                        </Segment>
                    )}   
                </Item.Group>
                <Container style={{paddingBottom: '100px'}}>
                        <Button name="Cancel" floated="left" onClick={this.handleCancel}>Cancel</Button>
                        <Button id="Next" floated="right" onClick={this.handleSubmit}>Next</Button>
                </Container>
            </React.Fragment>
        )
    }
}

