import React from 'react';

interface TextInputProps {
    labelName: string;
    name: string;
    onChange: React.Dispatch<React.ChangeEvent<HTMLInputElement>>;
    value: string;
    required: boolean
}

const TextInput = ({ labelName, name, onChange, value, required }:TextInputProps) => {

    return (
        <div className="flex flex-col">
            <label>{labelName}</label>
            <input 
                type='text'
                className ="w-[40vw] text-black-200 rounded"
                name={name}
                value={value}
                required={required}
                onChange={onChange}
            />
        </div>
    )
}

export default TextInput;