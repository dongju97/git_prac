import { useContext } from "react";
import ThemeContext from "./ThemeContex";

//메인 컨텐츠 컴포넌트는 Theme컨텍스트로 부터 현재 설정된 테마 값을 받아와 실제 화면의 컨텐츠를 렌더링
function MainContent(props) {
    const {theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div
            style={{
                width : "100vw",
                height : "100vh",
                padding : "1.5rem",
                backgroundColor : theme == "light" ? "white" : "black",
                color : theme == "light" ? "black" : "white",

            }}
            >
                <p>안녕하세요, 테마 변경이 가능한 웹사이트 입니다.</p>
                <button onClick={toggleTheme} > 테마 변경 </button>
            </div>
    );
}

export default MainContent;