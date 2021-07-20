import React from 'react';
import { IPeople } from '../App'; 

interface Props {
    people?: IPeople[]
}

export const List: React.FC<Props> = ({ people }) => {

    if(!people) return <h2>There's no one in your list yet.</h2>

    return (
        <ul>
            {people?.map(person => {
                return (
                    <li className="List">
                        <div className="List-header">
                            <img className="List-img" src={person.image} alt={`${person.name}`} />
                            <h2>{person.name}</h2>
                        </div>
                        <p>Plus: {person.addPeople} {person.addPeople < 2 ? "person" : "people"} </p>
                        <p className="List-note">{person.note}</p>
                    </li>
                )
            })}
        </ul>
    )
}