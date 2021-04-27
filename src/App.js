import './App.css';
import { Container } from '@material-ui/core'
import EmployeeList from './components/EmployeeList'
import EmployeeDetail from './components/EmployeeDetail'
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Container fixed>
        <Switch>
          <Route path="/" component={EmployeeList} exact />
          <Route path="/employeeDetail/:id" component={EmployeeDetail} />
          {/*<Route component={Error} />*/}
        </Switch>
      </Container>
    </div>
  );
}

export default App;
