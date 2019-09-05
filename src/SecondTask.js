import React from 'react';
import { DefaultForm } from 'ramunda'

export default class SecondTask extends React.Component{
    
    render() {
        return (<DefaultForm process={this.props.location.state.process}/>)
    }
}