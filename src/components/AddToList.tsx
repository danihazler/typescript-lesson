import React, { useState } from 'react';
import { Input } from './Input';
import { IPeople, IPerson } from '../App';

interface IProps {
    people: IPeople['people'],
    setPeople: React.Dispatch<React.SetStateAction<IPerson[]>>
}

export const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
    const [input, setInput] = useState( {
        name: '',
        image: '',
        addPeople: '',
        note: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleAddToList = (): void => {
        setPeople([
            ...people,  
            {
                name: input.name,
                addPeople: parseInt(input.addPeople),
                image: input.image,
                note: input.note
            }
        ])
    }

    return (
        <div className="AddToList">
            <Input 
                placeholder="Name" 
                type="text" 
                value={input.name}
                name="name" 
                handleChange={handleChange} 
            />
            <Input 
                placeholder="Image URL" 
                type="text" 
                value={input.image}
                name="image" 
                handleChange={handleChange}
            />
            <Input 
                placeholder="Add people" 
                type="number"
                name="addPeople" 
                value={input.addPeople} 
                handleChange={handleChange}
            />
            <textarea 
                placeholder="Note" 
                className="AddToList-input"
                onChange={handleChange}
                value={input.note}
                name="note" 
            />
            <button 
                className="AddToList-btn" 
                onClick={handleAddToList}
            >
                Add to List
            </button>
        </div>
    )
}