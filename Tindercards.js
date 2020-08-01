import React, { useState, useEffect } from 'react';
import './Tindercards.css';
import TinderCard from "react-tinder-card";
import database from "./firebase";

function Tindercards() {
    const [people,setpeople] = useState([]);
       
    useEffect(()=>{
       const unsubscribe= database.collection("people").
        onSnapshot(snapshot=>(
        setpeople(snapshot.docs.map(doc=>doc.data())
        ))
        );

        return() =>
        {
                unsubscribe();
        };


        },[]);
    return (
        <div>
            <div className="tindercard_cardcontainer">
            {people.map(person=>(
                <TinderCard
                className="swipe"
                key={person.name}
                preventSwipe={['up','down']}
                >
                    <div
                    style={{backgroundImage: `url(${person.url})`}} 
                    className="card">
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
                
            </div>
          
            
        </div>
    )
}

export default Tindercards
