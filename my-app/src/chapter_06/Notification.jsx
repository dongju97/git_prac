import React from "react";

const styles ={
    wrpper: {
        margin : 9,
        padding : 8,
        display :  "flex",
        flexDirection : "row" ,
        border : " 1px solid grey",
        borderRadius : 16, 
    },

    messageText : {
        color : "black",
        fontSize : 16,
    },

};

class Notification extends React.Component {
    constructor(props){
        super(props);

        this.state = {};

    }
    componentDidMount(){
        console.log(`${this.props.id} componentDIdMoun called`);
    }

    componentDidUpdate(){
        console.log(`${this.props.id}componentDidUpdate called`);
    }

    componentWillUnmount(){
        console.log(`${this.props.id}componentWillUnmoun called`);
    }

    render() {
        return (
            <div style={styles.wrpper}>
                <span style={styles.messageText}>{this.props.message}</span>
            </div>
        );
    }
}

export default Notification;