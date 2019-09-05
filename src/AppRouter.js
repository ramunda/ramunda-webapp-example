import React from 'react'
import Process1FirstTask from './process1/Process1FirstTask'
import Process1SecondTask from './process1/Process1SecondTask'
import Process2FirstTask from './process2/Process2FirstTask'
import Process3FirstTask from './process3/Process3FirstTask'
import Process3SecondTask from './process3/Process3SecondTask'
import Process4FirstTask from './process4/Process4FirstTask'
import Process4SecondTask from './process4/Process4SecondTask'
import ProcessCanceled from './ProcessCanceled'
import Home from './Home'
import { Route, Switch} from 'react-router-dom'
import { setBPMconfig } from 'ramunda'
import { Container } from 'semantic-ui-react'
import './App.css'

class App extends React.Component {

    async componentDidMount() {
        let test = await import('./testConfig.json')
        setBPMconfig(test.default)
    }

    render() {
        return (
            <Container className='forms'>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/process1/firstTask' component={Process1FirstTask} /*Calculator with normal forms*/ />
                    <Route exact path='/process1/secondTask' component={Process1SecondTask} /*Calculator with normal forms*/ />
                    <Route exact path='/process2/firstTask' component={Process2FirstTask}  />
                    <Route exact path='/process3/firstTask' component={Process3FirstTask}  />
                    <Route exact path='/process3/secondTask' component={Process3SecondTask}  />
                    <Route exact path='/process4/firstTask' component={Process4FirstTask}  />
                    <Route exact path='/process4/secondTask' component={Process4SecondTask}  />
                    <Route exact path='/processCanceled' component={ProcessCanceled}/>
                </Switch>
            </Container>
        )
    }
}
export default App;