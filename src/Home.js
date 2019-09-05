import React from 'react'
import { Image, Header, Container } from 'semantic-ui-react'
import libLogo from './img/libLogo.png'

class App extends React.Component {


    render() {
        return (
            <Container textAlign='center'>
                <Image centered src={libLogo} as='a'
                    href='https://github.com/ramunda/ramunda#readme'
                    alt='libLogo'
                    style={{ paddingTop: '100px' }}
                />
                <Header as='h1' color='red' textAlign='center'>
                    Web app example for ramunda framework
                </Header>
            </Container>
        )
    }
}
export default App;