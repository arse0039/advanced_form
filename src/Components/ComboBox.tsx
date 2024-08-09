"use client"
import React, {useRef, useState, useEffect} from 'react';

interface ComboBoxProps {
    labelName: string;
    comboBoxData: string;
    dataArray: string[];
    handleAddressItemChange: (item: string, changedValue: string) => void;
    conditionalSelection?: React.Dispatch<React.SetStateAction<boolean>>
}

const ComboBox = ({
        labelName, 
        comboBoxData, 
        dataArray, 
        handleAddressItemChange,
        conditionalSelection
    } : ComboBoxProps) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [selectedState, setSelectedState] = useState<string>("");
    const [searchTerm, setSearchTerm] = useState<string>("");
    const comboBoxRef = useRef<HTMLDivElement>(null);

    const filteredArrayData = dataArray.filter((data) => (
        data.toLowerCase().includes(searchTerm.toLowerCase())
    ))

    const handleComboBoxFocus = () => {
        setIsFocused(true);
    }

    const handleSelectedState = (state:string) => {
        debugger;
        setSelectedState(state);
        setSearchTerm(state);
        handleAddressItemChange(comboBoxData, state)
        setIsFocused(false)
        if(typeof conditionalSelection === "function") {
            conditionalSelection(true)
        }
    }

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchTerm(value);
    }

    useEffect(() => {
        const handleUnfocusClick = (event: MouseEvent) => {
            if(comboBoxRef.current && !comboBoxRef.current.contains(event.target as Node)) {
                if (!selectedState) {
                    setSearchTerm("")
                }
                setIsFocused(false)
            }
        }
        document.addEventListener("mousedown", handleUnfocusClick);

        return () => {
            document.removeEventListener("mousedown", handleUnfocusClick)
        }
    }, [selectedState])

    return (
        <div className="w-fit flex flex-col relative" ref={comboBoxRef}>
                <label>{labelName}</label>
                <input 
                    onFocus={handleComboBoxFocus} 
                    name={comboBoxData} 
                    value={searchTerm} 
                    onChange={handleSearchChange}
                />
                <ul className="bg-white border border-grey-300 px-2 w-fit max-h-60 overflow-y-auto rounded shadow-md">
                    {isFocused ? filteredArrayData.map((data, idx) => (
                        <li key={idx} onClick={() => handleSelectedState(data)}>{data}</li>
                    )) : null }
                </ul>
            </div>
    )
}

export default ComboBox;