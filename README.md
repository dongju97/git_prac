# git 연습하기
1. branch 생성 - develop1 새로 생성 후 브랜치로 이동(git switch develop1)
2. develop1으로 작업

#리액트 연습
// npm 사용하기

$ npx create-react-app <프로젝트 이름>
$ cd my-app
$ npm start

 (staging할 수 있는 목록이 뜸. git add 파일명)
3. main으로 머지
main으로 이동 후 머지함 : git merge develop1

useEffect(() =>{
    //컴포넌트가 마운트 된 이후,
    //의존성 배열에 있는 변수들 중 하나라도 값이 변경되어있을 떄 실행됨
    // 의존성 배열에 빈 배열[]을 넣으면 마운트와 언마운트시에 단 한번씩만 실행됨
    // 의존성 배열 생략 시 컴포넌트 업데이트 시마다 실행됨

    return ()=>{
        //컴포넌트가 마운트 해제되기 전에 실행됨

    }

}, [의존성 변수1 .. ]);

const memoizedValud = useMemo(
    () => {
        //연산량이 높은 작업을 수행하여 결과 반환
        return computeExpensiveValue(의존성 변수1, 의존성변수2);
    },
    [의존성 변수1, 의존성 변수2]
)