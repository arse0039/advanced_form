import TextInput from "./TextInput";

interface NameSectionProps {
    firstName: string;
    lastName: string;
    handleTextChange: React.Dispatch<React.ChangeEvent<HTMLInputElement>>
}

const NameSection = ({ firstName, lastName, handleTextChange }:NameSectionProps) => {
return (
    <div className="flex flex-row justify-center gap-12 border-2 border-slate-100 rounded-lg p-4 w-[90vw]">
                <TextInput 
                    labelName={"First Name"}
                    name={'firstName'}
                    value={firstName}
                    onChange={handleTextChange}  
                    required={true}  
                />
                <TextInput 
                    labelName={"Last Name"}
                    name={'lastName'}
                    value={lastName}
                    onChange={handleTextChange}    
                    required={true}  
                />
        </div>
)
}

export default NameSection;