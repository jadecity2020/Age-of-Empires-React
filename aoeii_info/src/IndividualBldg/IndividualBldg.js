import React, {useState, useEffect} from 'react'
import { dataContext } from "../App";
import './IndividualBldg.css'

function IndividualCivilization (props){
    const [bldgCost,setBldgCost]= useState({})
    const [bldgDetail, setBuildingDetail]= useState({})
    const [civUniqueUnit, setCivUniqueUnit]=useState([])
    const [civUniqueTech, setCivUniqueTech]=useState([])
    // const DataContext = useContext(dataContext);
    // console.log("Datacontext", DataContext);

    useEffect( ()=>{
        let IndBldgURL=`https://cors-anywhere.herokuapp.com/https://age-of-empires-2-api.herokuapp.com/api/v1/structure/${props.match.params.bldg}`
            const makeAPICall= async()=>{
            const res = await fetch(IndBldgURL)
            const json = await res.json()
            console.log('bldg API call',json)
            setBldgCost(json[0].cost)
            setBuildingDetail(json[0])
        }
        makeAPICall()
    },[props.match.params.bldg] )
    let displayBuildingCost = <h1>loading</h1>;
    let woodCost=''
    let foodCost=''
    let goldCost=''
    let stoneCost=''
    if (bldgCost.Wood) {
      woodCost=`Wood: ${bldgCost.Wood}`
    }
    if (bldgCost.Food) {
      foodCost=`Food: ${bldgCost.Food}`
    }
    if (bldgCost.Gold) {
      goldCost=`Gold: ${bldgCost.Gold}`
    }
    if (bldgCost.Stone) {
      stoneCost=`Stone: ${bldgCost.Stone}`
    }
    if(bldgCost){
      displayBuildingCost=<h2>Cost- {foodCost} {woodCost} {goldCost} {stoneCost}</h2>
    }

    return (
        <div className='civ-bonus'>
          <h1>{bldgDetail.name}</h1>
          {displayBuildingCost}
          <h2>Available Age: {bldgDetail.age} Age</h2>
          <h2>Hit Point: {bldgDetail.hit_points}</h2>
          <h2>Armor: {bldgDetail.armor}</h2> 
        </div>
    )
}
export default IndividualCivilization