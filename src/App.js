import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Navigation from './Navigation';
import Homepage from './Homepage';
import Users from './Users';



function App() {
  return (
  
      
    
      <BrowserRouter>
        <div>
     
      <Header />
      <Navigation />
   
        <Switch>
          <Route path="/" exact={true}>
            <Homepage />
          </Route>
          <Route path="/users">
            <Users />
          </Route>

        </Switch>
        <Footer />  

        </div>
    </BrowserRouter>
    




    
  );
}

export default App;
