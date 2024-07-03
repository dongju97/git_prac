import React, {useState, useEffect} from "react";
import useCounter from "./useCounter";

//useCount 훅을 사용하여 카운트를 관리
const MAX_CAPACITY = 10;

function Accommodate(props) {
    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount] = useCounter(0);

    //의존성배열이 없는 형태
    //상태가 변경될때마다 업데이트 , 컴포넌트가 업데이트 될때마다 호출됨
    useEffect(() => {
        console.log("===================");
        console.log("useEffect() is called");
        console.log(`isFull : ${isFull}`);
    });
    //배열 있는 형태([count]) => count값이 변할때 돌아감
    useEffect(()=>{
        setIsFull(count >= MAX_CAPACITY);
        console.log(`Cuurent count value : ${count}`);

    }, [count]);

    return (
        <div style={{padding : 16}}>
            <p> {`총 ${count}명 수용했습니다.`}</p>
 
            <button onClick={increaseCount} disabled={isFull}>
                입장
            </button>
            <button onClick={decreaseCount}> 퇴장 </button>
            {isFull && <p style={{color : "red"}}>정원이 가득 찼습니다.</p>}
        </div>
    );
}

export default Accommodate