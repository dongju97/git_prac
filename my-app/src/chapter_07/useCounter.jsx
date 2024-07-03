import React, {useState} from "react";

//React Hook useState
//초기 카운트 값을 파라미터로 받아서 카운트라는 state를 생성하여 값을 제공, 카운트 증가 및 감소 함수

function useCounter(initialValue){
    const [count, setCount] = useState(initialValue);

    const increaseCount = () => setCount((count) => count + 1);
    const decreaseCount = () => setCount((count) => Math.max(count-1 ,0));

    return [count, increaseCount, decreaseCount];
 
}

export default useCounter;