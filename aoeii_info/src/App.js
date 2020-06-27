import React, {useState, createContext} from 'react';
import './App.css';
import Introduction from './Introduction/Introduction';
import {Route, Link} from 'react-router-dom'
import Civilization from './Civilzation/Civilization';
import IndividualCivilization from './IndividualCivilization/IndividualCivilization';

// export const dataContext = createContext();

function App() {
const [civName, setCivName]= useState('')
const [unitName, setUnitName]= useState('')

const handleCivName = name => (setCivName(name))
const handleUnitName = name => (setUnitName(name))
  
  return (
    <div className="App">
      {/* <dataContext.Provider value={ {handleCivName, handleUnitName, civName, unitName} }> */}
      <div>
        <nav className='navbar'>
          <Link path='/'>
            <h1>Age of Empires II: The Conquerors</h1>
          </Link>   
            <ul className='navbar-selection'>
              <Link to='/Civilization'><li>Civilization</li></Link>
              <li>Units</li>
              <li>Buildings</li>
              <li>Technology</li>
              <li>Ages</li>
              <li>About</li>
            </ul>
        </nav>   
      </div>
      <main>
        <Route exact path='/' component={Introduction} />
        <Route exact path='/Civilization' component={Civilization} />
        <Route exact path='/Civilization/:civlization'
        render={ (props)=>
        <IndividualCivilization {...props}
        civName={civName}
        handleCivName={handleCivName}
        />}/>
        {/* </dataContext.Provider> */}
      </main>
    </div>
  );
}

export default App;
