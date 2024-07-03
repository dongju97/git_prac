import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from './chapter_03/library';
import Clock from './chapter_04/Clock';
import CommentList from './chapter_05/CommentList';
import NotificationList from './chapter_06/NotificationList';
import Accommodate from './chapter_07/Accommodate';
import ConfirmButton from './chpater_08/ConfirmButton';
import LandingPage from './chapter09/LandingPage';
import AttendanceBook from './chapter_10/AttendanceBook';

 //const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
// setInterval(() => {
  // React Dom 의 render함수 사용해서 실제 화면에 렌더링
  ReactDOM.render(
    <React.StrictMode>
        <AttendanceBook/>
    </React.StrictMode>,
    document.getElementById('root')
  );
// },1000);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
