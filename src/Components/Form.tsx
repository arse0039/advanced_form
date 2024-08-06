import React, {useState} from 'react';
import TextInput from './TextInput';

const FormComponent = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        middleInitial: "",
        address: "",
        state: "",
        county: "",
        zipCode: null,
        phoneNumber: null,
    })

    const handleTextChange = (e) => {
        const {name, value} = e.target;
        setFormData((previousData) => ({
            ...previousData,
            [name]: value
        }))
    }
    return (
        <form>
            <div className="flex flex-row justify-center gap-12 border-2 border-slate-100 rounded-lg p-4 w-[90vw]">
                <TextInput 
                    labelName={"First Name"}
                    name={'firstName'}
                    value={formData.firstName}
                    onChange={handleTextChange}    
                />
                <TextInput 
                    labelName={"Last Name"}
                    name={'lastName'}
                    value={formData.lastName}
                    onChange={handleTextChange}    
                />
            </div>

        </form>
    )
}

export default FormComponent;