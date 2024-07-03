import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        id : 1,
        message : "안녕하세요.  오늘 일정을 알려드립니다.",

    },
    {
        id : 2,
        message : "점심식사 시간입니다.",
    },
    {
        id : 3,
        message : "이제 곧 미팅이 시작됩니다.",
    },
];

var timer;
//Class Component
//생성자에서 state를 정의
//setState() 함수를 통해 state 업데이트
//LifeCycle methods 제공
class NotificationList extends React.Component {
    constructor(props){
        super(props);
        //처음 생성자에서 빈 배열을 state에 넣음
        this.state = {
            notifications : [],
        };
    }

    //생명주기 함수 - 1초마다 생성됨
    componentDidMount(){
        const {notifications} = this.state;
        timer = setInterval(() => {
            if(notifications.length < reservedNotifications.length){
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({
                    notifications : notifications,
                });
            }else {
                this.setState({
                    notifications : [],
                })
            }
        }, 1000);

    }

    render() {
        return (
            <div>
                {this.state.notifications.map((notification) => {
                    return <Notification
                    //여기서  key 는 리액트 앨리먼트를 구분하기 위한 고유의 값
                    // map함수 사용할 때는 꼭 들어가야함

                            key={notification.id}
                            id={notification.id}
                    message = {notification.message} />;
                })}
            </div>
        );

    }
}
export default NotificationList;