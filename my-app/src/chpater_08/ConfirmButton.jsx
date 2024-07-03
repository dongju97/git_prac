import React , {useState} from "react";


function ConfirmButton (props) {
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleConfirm = () => {
        setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
    
    };

    return (
        <button onClick = {handleConfirm} disabled = {isConfirmed}>
            {isConfirmed ? "확인됨" : "확인하기"}
        </button>
    )
}

//클래스 컴포넌트는 거의 사용하지 않음
// class ConfirmButton extends React.Component {
//     constructor(props) {
//         super(props);

        
//         this.state = {
//             isConfirmed : false,
//         };

//         //bind사용
//         //this.handleConfirm = this.handleConfirm.bind(this);

//         //arrow function 으로 변경

//     }

//     handleConfirm = () => {
//         this.setState((prevstate) =>({
//             isConfirmed : !prevstate.isConfirmed,
//         }));
//     }

//     render() {
//         return (
//             <button
//                 onClick = {this.handleConfirm}
//                 disabled = {this.state.isConfirmed}
//             >
//                 {this.state.isConfirmed ? "확인됨" : "확인하기"}
//             </button>
//         );
//     }
// }

export default ConfirmButton;