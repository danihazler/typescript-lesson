import React from 'react';

interface IProps {
    placeholder: string,
    type: string,
    name: string,
    value: string | number,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input: React.FC<IProps> = ({ placeholder, type, name, value, handleChange }) => {
    return (
        <input 
            className="AddToList-input"
            onChange={handleChange}
            placeholder={placeholder}
            name={name}
            value={value}
            type={type}
        />
    )
}