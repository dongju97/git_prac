import React from "react";
import{
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import styled from "styled-components";

//Pages
import MainPage from "./mini-blog/component/page/MainPage";
import PostWritePage from "./mini-blog/component/page/PostWritePage";
import PostViewPage from "./mini-blog/component/page/PostViewPage";

const MainTitleText = styled.p`
    font-size : 24px;
    font-weight : bold;
    text-aligh : center;
`;

function App (props){
  return(
    <BrowserRouter>
      <MainTitleText>동주의 미니블로그</MainTitleText>
          <Routes>
              <Route index element={<MainPage/>}></Route>
              <Route path="post-write" element={<PostWritePage/>}></Route>
              <Route path = "post/:postId" element={<PostViewPage/>}></Route>
          </Routes>
      
    </BrowserRouter>
  );
}

export default App;