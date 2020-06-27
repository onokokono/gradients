import React from 'react';
import './App.css';
import Navigation from './components/navigation/navigation';
import GradientContainer from './containers/gradients-container/gradient-container';

function App() {
  return (
    <div className="App">
      
      <Navigation />
      <GradientContainer />

    </div>
  );
}

export default App;
