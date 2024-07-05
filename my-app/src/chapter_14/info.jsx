//컨텍스는 데이터 전달 api

import Toolbar from "../chapter09/toolbar";

const ThemeContext = React.createContext('light');

//Provider를 사용하여 하위 컴포넌트들에게 현제 테마 데이터 전달
//모든 하위 컴포넌트들은 컴포넌트 트리하단에 얼마나 깊이 있는지 관계없이 데이터 읽을수 있음

function App(props){
    return(
        <ThemeContext.Provider value="dark">
            <Toolbar/>
        </ThemeContext.Provider>
    );
}

//중간에 위치한 컴포넌트는 테마 데이터를 위한 하위 컴포넌트로 전달할 필요가 없음
function Toolbar(props){
    return (
        <div>
            <ThemeButton />
        </div>
    );
}

function ThemeButton(props) {
    //리액트는 가장 가까운 상위 테마 Provider를 찾아 해당되는 값 사용
    // 만약 해당되는  Provider가 없을 경우 기본값(여기서는 light)를 사용
    //여기에서는 상위 Provider가 있기 때문에 현제 테마의 값은 'dark'
    return (
        <ThemeContext.Consumer>
            {value => <Button theme={value} />}
        </ThemeContext.Consumer>
    )
}