"use client"
import React, {useState} from 'react';
import { FormDataProps } from '@/Types/types';
import NameSection from './NameSection';
import AddressSection from './AddressSection';

const FormComponent = () => {
    const [formData, setFormData] = useState<FormDataProps>({
        firstName: "",
        lastName: "",
        middleInitial: "",
        address: "",
        state: "",
        county: "",
        zipCode: null,
        phoneNumber: null,
    })

    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((previousData) => ({
            ...previousData,
            [e.target.name]: e.target.value
        }))
    }
    return (
        <form>
            <NameSection 
                firstName={formData.firstName} 
                lastName={formData.lastName} 
                handleTextChange={handleTextChange} 
            />
            <AddressSection 
                address={formData.address}
                state={formData.state}
                zipCode={formData.zipCode}
                county={formData.county}
                handleTextChange={handleTextChange}
            />
        </form>
    )
}

export default FormComponent;