import React, {useState, createContext} from 'react';
import './App.css';
import Introduction from './Introduction/Introduction';
import {Route, Link} from 'react-router-dom'
import Civilization from './Civilzation/Civilization';
import IndividualCivilization from './IndividualCivilization/IndividualCivilization';
import IndividualUnits from './IndividualUnits/IndividualUnits'
import IndividualBldg from './IndividualBldg/IndividualBldg'
import Units from './Units/Units'
import Buildings from './Buildings/Buildings'

// export const dataContext = createContext();

function App() {  
  return (
    <div className="App">
      {/* <dataContext.Provider value={ {handleCivName, handleUnitName, civName, unitName} }> */}
      <div>
        <nav className='navbar'>
          <Link to='/'>
            <h1>Age of Empires II: The Conquerors</h1>
          </Link>   
            <ul className='navbar-selection'>
              <Link to='/Civilization'><li>Civilization</li></Link>
              <Link to='/Units'><li>Units</li></Link>
              <Link to='/Buildings'><li>Buildings</li></Link>
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
          />}/>
        <Route exact path='/Units' component={Units}/>
        <Route exact path='/Units/:unit'
          render={ (props)=>
          <IndividualUnits {...props}
          />}/>
        <Route exact path='/Buildings' component={Buildings} />
        <Route exact path='/Buildings/:bldg'
          render={ (props)=>
          <IndividualBldg {...props}
          />}/>
        {/* </dataContext.Provider> */}
      </main>
    </div>
  );
}

export default App;
