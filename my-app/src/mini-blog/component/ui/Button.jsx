import React from "react";
import style from "styled-components";

const StlyeButton = styled.button`
    padding : 8px 16px;
    font-size : 16px;
    border-width : 1px;
    border-radius : 8xp;
    cursor : pointer;
`;

function Button(props) {
    const {title, onClick} = props;

    return <StlyeButton onClick={onClick} > {title || "button" }</StlyeButton>
}

export default Button;