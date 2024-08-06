"use client"
import React, {useState, useCallback} from 'react';
import TextInput from "./TextInput";
import data from '../../public/StateData/stateData.json';

interface AddressSectionProps {
    address: string;
    state: string;
    county: string;
    zipCode: number | null;
    handleTextChange: React.Dispatch<React.ChangeEvent<HTMLInputElement>>
}

const AddressSection = ({
    address,
    state,
    county,
    zipCode,
    handleTextChange
}: AddressSectionProps) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [selectedState, setSelectedState] = useState<string>("");

    const statesArray =  Array.from(new Set(data.map((item) => item.State)));
    const filterCounties = data.filter((i) => i.State === state);

    const handleComboBoxFocus = () => {
        setIsFocused(true);
    }

    const handleComboBoxBlur = () => {
        // setIsFocused(false);
    }

    const handleSelectedState = (state:string) => {
        setSelectedState(state);
        setIsFocused(false)
    }

    return(
        <div className="flex flex-col justify-center gap-12 border-2 border-slate-100 rounded-lg p-4 w-[90vw]">
            <TextInput 
                labelName={"address"} 
                name={"address"} 
                onChange={handleTextChange}
                value={address}
                required={true}
            />
            <input onFocus={handleComboBoxFocus} onBlur={handleComboBoxBlur} name="state" value={selectedState} onChange={handleTextChange}></input>
            <ul>
                {isFocused ? statesArray.map((state, idx) => (
                    <li key={idx} onClick={() => handleSelectedState(state)}>{state}</li>
                )) : null }
            </ul>
            
        </div>
    )
}

export default AddressSection;