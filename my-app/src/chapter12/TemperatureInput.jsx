const scaleNames = {
    c : '섭씨',
    f : '화씨',
};


function TemperatureInput (props) {
    const handleChange = (event) => {
        //상위 컴포넌트로 변경된 값 전달
        props.onTempreatureChange(event.target.value);
    };

    return(
        <fieldset>
            <legend>
                온도를 입력해주세요(단위: {scaleNames[props.scale]});
            </legend>
            <input value={props.temperature} onChange={handleChange}/>
        </fieldset>
    );
}

export default TemperatureInput;