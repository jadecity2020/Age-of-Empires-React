import React, {useState, createContext} from 'react';
import './App.css';
import Introduction from './Introduction/Introduction';
import {Route, Link} from 'react-router-dom'
import Civilization from './Civilzation/Civilization';
import IndividualCivilization from './IndividualCivilization/IndividualCivilization';
import IndividualUnits from './IndividualUnits/IndividualUnits'
import Units from './Units/Units'

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
          <Link to='/'>
            <h1>Age of Empires II: The Conquerors</h1>
          </Link>   
            <ul className='navbar-selection'>
              <Link to='/Civilization'><li>Civilization</li></Link>
              <Link to='/Units'><li>Units</li></Link>
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
        <Route exact path='/Units' component={Units}/>
        <Route exact path='/Units/:unit'
          render={ (props)=>
          <IndividualUnits {...props}
          unitName={unitName}
          handleUnitName={handleUnitName}
          />}/>
        {/* </dataContext.Provider> */}
      </main>
    </div>
  );
}

export default App;
