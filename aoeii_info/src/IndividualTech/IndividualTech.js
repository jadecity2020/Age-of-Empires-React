import React, {useState, useEffect} from 'react'
import './IndividualTech.css'

function IndividualUnits (props){
    const [techAge, setTechAge]= useState('')
    const [techCost, setTechCost]= useState({})
    const [techDesc, setTechDesc]=useState('')
    const [techLoc, setTechLoc]=useState('')
    // props.handleUnitName(props.match.params.unit)
    useEffect( ()=>{
        let IndtechURL=`https://cors-anywhere.herokuapp.com/https://age-of-empires-2-api.herokuapp.com/api/v1/technology/${props.match.params.tech}`
            const makeAPICall= async()=>{
            const res = await fetch(IndtechURL)
            const json = await res.json()
            console.log('ind tech', json)
            console.log(json.age)
            setTechAge(json.age)
            setTechCost(json.cost)
            setTechDesc(json.description)
            setTechLoc(json.develops_in.slice(55))
            console.log('techage',techAge)
            console.log('tech cost',techCost)
            console.log('tech desc',techDesc)
            console.log('tech Loc',techLoc)
        }
        makeAPICall()
    },[props.match.params.tech] )

    // let displayUnitAttackBonus = <h1>loading</h1>;
    // if (unitAttackBonus[0]) {
    //   displayUnitAttackBonus = unitAttackBonus.map((bonus) => {
    //     return <p>{bonus}</p>;
    //   });
    // }
  //   let displayUnitCost=<p>Loading Cost</p>
  //   if(unitCost){
  //   if(!unitCost.Food){
  //     displayUnitCost=<p>Wood: {unitCost.Wood} Gold: {unitCost.Gold}</p>
  //   } else if (!unitCost.Wood){
  //     displayUnitCost=<p>Food: {unitCost.Food} Gold: {unitCost.Gold}</p>
  //   } else if (!unitCost.Gold){
  //     displayUnitCost=<p>Food: {unitCost.Food} Wood: {unitCost.Wood}</p>
  //   } else {
  //     displayUnitCost=<p>Food: {unitCost.Food} Wood: {unitCost.Wood} Gold: {unitCost.Gold}</p>
  //   }
  // }
    
    return (
        <h1>im ind tech</h1>
        // <div className='ind-unit'>
        // <h1>{unitDetail.name}</h1>
        // <h2>'{unitDetail.description}'</h2>
        // <h2>Attack: {unitDetail.attack}</h2>
        // <h2>Armor(Melee/Pierce): {unitDetail.armor}</h2>
        // {displayUnitCost}
        // </div>
    )
}
export default IndividualUnits