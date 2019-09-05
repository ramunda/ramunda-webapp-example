import React, { Component } from 'react'
import { Segment, Container, Header, Grid, Icon } from 'semantic-ui-react'

export default class AppMenu extends Component {

    render() {

        return (
            <Segment inverted vertical style={{
                height: '50px',
                position: 'fixed',
                bottom: '0%',
                width: '100%'
            }}>
                <Container textAlign='center'>
                    <Grid divided inverted stackable textAlign='center'>
                        <Grid.Column width={4}>
                            <Header inverted>
                                <Icon name='github' />
                                <Header.Content as='a' href='https://github.com/JoaoPauloMartins001' style={{color:'white'}}>JoaoPauloMartins001</Header.Content>
                            </Header>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Header inverted>
                                <Icon name='github' />
                                <Header.Content as='a' href='https://github.com/JoaoFranciscoPereira' style={{color:'white'}}>JoaoFranciscoPereira</Header.Content>
                            </Header>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Header inverted>
                                <Icon name='github' />
                                <Header.Content as='a' href='https://github.com/tsss97' style={{color:'white'}}>tsss97</Header.Content>
                            </Header>
                        </Grid.Column>
                    </Grid>
                </Container>
            </Segment>
        )
    }
}