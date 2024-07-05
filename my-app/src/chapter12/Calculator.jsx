import React, {useState} from "react";
import TemperatureInput from "./TemperatureInput";

function BoilingVerdict(props){
    if(props.celius >= 100) {
        return <p>물이 끓습니다.</p>
    }
    return <p>물이 끓지 않습니다.</p>
}

function toCelius(fahrenheit){
    return((fahrenheit - 32) * 5) /9;
}

function toFahrenheit(celius){
    return (celius *9 ) / 5 + 32
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if(Number.isNaN(input)) {
        return "";
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000 ;
    return rounded.toString();
}

function Calculator(props) {
    const[temperature, setTemperature] = useState("");
    const[scale, setScale] = useState("c");

    const handleCeliusChange = (temperature) => {
        setTemperature(temperature);
        setScale("c");
    };

    const handleFahrenheitChange = (temperature) => {
        setTemperature(temperature);
        setScale("f");
    };

    const celsius = 
        scale === "f" ? tryConvert(temperature, toCelius) : temperature;
    const fahrenheit =
        scale === "c"? tryConvert(temperature, toFahrenheit) : temperature;
    
    //모든 온도를 섭씨로 변환하여 BoilingVerdict 컴포넌트에 전달 -> 섭씨로 물이 끓는지 판단
    return (
        <div>
            <TemperatureInput
                scale="c"
                temperature={celsius}
                onTempreatureChange={handleCeliusChange}/>
            <TemperatureInput
                scale="f"
                temperature={fahrenheit}
                onTempreatureChange={handleFahrenheitChange}/>
            <BoilingVerdict celius={parseFloat(celsius)}/>
        </div>
    )
 }

 export default Calculator;