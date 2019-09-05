import React, { Component } from 'react'
import { Menu, Container } from 'semantic-ui-react'
import libLogo from './img/libLogoMenu.png'
import {withRouter} from 'react-router-dom'

class AppMenu extends Component {

    handleClick = (url) => {
        this.props.history.push({
            pathname: url,
        })
    }

    render() {
       
        return (
            <Menu inverted fixed='top' style={{height: '50px'}}>
                <Container>
                    <Menu.Item>
                        <img src={libLogo} alt='libLogo'/>
                    </Menu.Item>
                    <Menu.Item onClick={() => this.handleClick('/')}>
                        Home
                    </Menu.Item>
                    <Menu.Item onClick={() => this.handleClick('/process1/firstTask')}>
                        Process1
                    </Menu.Item>
                    <Menu.Item onClick={() => this.handleClick('/process2/firstTask')}>
                        Process2
                    </Menu.Item>
                    <Menu.Item onClick={() => this.handleClick('/process3/firstTask')}>
                        Process3
                    </Menu.Item>
                    <Menu.Item onClick={() => this.handleClick('/process4/firstTask')}>
                        Process4
                    </Menu.Item>
                </Container>
            </Menu>
        )
    }
}

export default withRouter(AppMenu)