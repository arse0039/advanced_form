"use client"
import React, {useState} from 'react';
import TextInput from "./TextInput";
import data from '../../public/StateData/stateData.json';
import ComboBox from './ComboBox';

interface AddressSectionProps {
    address: string;
    state: string;
    county: string;
    zipCode: number | null;
    handleTextChange: React.Dispatch<React.ChangeEvent<HTMLInputElement>>
    handleAddressItemChange: (item: string, changedValue: string) => void;
}

const AddressSection = ({
    address,
    state,
    county,
    zipCode,
    handleTextChange,
    handleAddressItemChange
}: AddressSectionProps) => {
    const [stateSelected, setStateSelected] = useState<boolean>(false);

    const statesArray =  Array.from(new Set(data.map((item) => item.State)));
    const filterCounties = data.filter((i) => i.State === state).map((item) => item.County)
    
    return(
        <div className="flex flex-col justify-center gap-12 border-2 border-slate-100 rounded-lg p-4 w-[90vw]">
            <TextInput 
                labelName={"Address"} 
                name={"address"} 
                onChange={handleTextChange}
                value={address}
                required={true}
            />
            <div className="flex flex-row gap-8">
                <ComboBox
                    labelName="State"
                    comboBoxData={"state"}  
                    dataArray={statesArray}
                    handleAddressItemChange={handleAddressItemChange}
                    conditionalSelection={setStateSelected}
                />
                {stateSelected ? (
                    <ComboBox 
                        labelName="County"
                        comboBoxData={"county"}  
                        dataArray={filterCounties}
                        handleAddressItemChange={handleAddressItemChange}
                    /> )
                : null}    
            </div>
        </div>
    )
}

export default AddressSection;