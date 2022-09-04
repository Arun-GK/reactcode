
import React from 'react';
import {Data} from "./Data";

export default function Usestate() {
    const [people,setPeople]=React.useState(Data)
    const removeItem=(id)=>{
        let newPeople=people.filter(person=>person.id !==id);
        setPeople(newPeople)

    }
   
  return (
    <div>
      {people.map((person)=>{const {id}=person;
      return(
      <div >
        <h4 >{person.name}</h4>
        <button key={person.id} onClick={()=>removeItem(id )}>remove</button></div>
   
   )} )}
        <button onClick={()=>setPeople([])}>clear </button>
    </div>
  )
  
}
