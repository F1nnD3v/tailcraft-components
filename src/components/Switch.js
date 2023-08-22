import { useState } from "react"

const Switch = ({textEnabled = "I'm enabled", textDisabled = "I'm disabled", enabled = true, primaryColor = "blue", secondaryColor = "white"}) => {
    
    const [isEnabled, setIsEnabled] = useState(enabled);

    const onChange = () => {
        
    }
    
    return (<div className={`flex justify-around bg-${primaryColor}-500 w-32 text-${secondaryColor} text-center rounded-full p-1 hover:cursor-pointer`} onClick={() => onChange()}>
            <div className={`bg-${secondaryColor} w-5 h-5 rounded-full my-auto`}></div>
                {
                    isEnabled ? textEnabled : textDisabled
                }
            </div>)
}