import React, {useState} from "react";
import Toolbar from "./toolbar";

function LandingPage (props){
    //사용자의 로그인 여부를 자체적으로 관리
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onClickLogin = () => {
        setIsLoggedIn(true);
    };

    const onClickLogout = () => {
        setIsLoggedIn(false);
    }

    return (
        <div>
            <Toolbar
                isLoggedIn={isLoggedIn}
                onClickLogin={onClickLogin}
                onClickLogout={onClickLogout}/>
            <div style={ {padding : 16 }}> 랜더링 함수 구현하기</div>
        </div>
    );
    
} 

export default LandingPage;