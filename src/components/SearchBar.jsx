import React ,{useEffect,useState} from 'react'
import '../App.js'
import './search.css'
export default function SearchBar() {

  const[set,reSet]=useState('');

  const[ig,setIg]=useState('');

  const[text,setText]=useState( );

  const b=(e)=>{
  return reSet(e.target.value)
  }
   
   const a=()=>{
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'fd04ac4e75msh38e3be9e21cce96p157ba5jsn84d439e871ef',
        'X-RapidAPI-Host': 'animals-endangered-environmentalism.p.rapidapi.com'
      }
    };
    
    fetch(`https://animals-endangered-environmentalism.p.rapidapi.com/common/${set}`, options)
      .then(response => response.json())
      .then(response =>{
         setIg(response.source.image)
         setText(response.data.textSummary.details.geographicRangeInformation)
      })
      .catch(err => {
        setIg("Opps! Not Available")
        setText("Opps! Not Available")
      });
  }


  return (
    <>
    
    <div className="init">
      <h3>This website contains the data from The IUCN Red List of Threatened Species.</h3>
    </div>
  <div id='srcbar'>
    <input placeholder='Search animal' type="text" name="" id="ip" onChange={b} />
        <button onClick={a} className="btn btn-primary">Search</button>
        </div>


<div className="f1">
  <div className="f2">{text}</div>
  <div className="f3"><img src={ig} alt=""/></div>
</div>

    </>
  )
}
