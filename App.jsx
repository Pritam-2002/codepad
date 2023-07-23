import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css'
import A from './components/a'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    <div>
      {/* Place your common components, headers, etc. here */}
      <Switch>
        
        <Route exact path="/A">
          
   
      <A />

      </Route>
          
        </Switch>
      </div>
    </Router>
      
       
      
     
    
  );
}

export default App
