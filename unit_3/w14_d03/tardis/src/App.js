import React from 'react';
import logo from './logo.svg';
import './App.css';
import DivOne from "../src/components/divOne.jsx"

function App() {

  const [state, setState] = React.useState({
    tardis: {
      name: 'Time and Relative Dimension in Space',
      caps: false
    }
  })

  const changeIt = (text) => {
    if (state.tardis.caps) {
      setState({
        tardis: {
          name: text.toLowerCase(),
          caps: false
        }
      })
    } else {
      setState({
        tardis: {
          name: text.toUpperCase(),
          caps: true
        }
      })
    }
  }

  state.changeIt=changeIt;

  return (
    <div className="App">
      <DivOne {...state}/>
    </div>
  );
}

export default App;
