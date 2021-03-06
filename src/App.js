import './App.css'
import { BrowserRouter as Router , Route } from 'react-router-dom';
import CardsTask from './components/HW-5.1/CardsTask'
import Decomposition from './components/HW-5.2/Decomposition'
import Collapse from './components/HW-5.3/Collapse'
import Navigation from './components/Navigation'
import data from './components/HW-5.2/data'

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <div className="task">
          <Route path="/first" component={ CardsTask } />
          <Route path="/second">
            <Decomposition { ...data } />
          </Route>
          <Route path="/third" component={ Collapse } />
        </div>
      </div>
    </Router>
  );
}

export default App;
