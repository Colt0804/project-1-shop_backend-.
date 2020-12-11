import React from 'react';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App"> 
      <Header />

      <Switch>
        <Route path="/checkout">
          <Checkout />
        </Route>   
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
