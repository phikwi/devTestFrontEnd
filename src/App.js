
import './App.css';
import React,{Component} from 'react';
import {Route,BrowserRouter as Router} from 'react-router-dom';
import AddCondition from './pages/AddCondition';
import UpdateCondition from './pages/UpdateConditon'
import Home from './pages/Home'
class App extends Component {
     
  render(){
    return (     
      <div>                
          <Router>                    
              <Route path="/" exact component={Home} />         
              <Route path="/add" exact component={AddCondition} />
              <Route path="/update/:id" exact component={UpdateCondition} />
                   
          </Router>
      </div>
    );
  }

   
}
export default App;
