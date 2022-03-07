import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 150px;
    margin-top: 0.6rem;
`;

const Background = styled.div`
    width: 45px;
    height: 22.5px;
    border-radius: 12px;
    background-color: ${(props) => (props.isActive ? "#55eb55" : "transparent")};
    border: 1px solid #eee;
    position: relative;
`;

const Ball = styled.div`
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: #eee;
    position: absolute;
    top: 50%;
    left: 2px;
    cursor: pointer;
    transform: ${(props) => (props.isActive ? "translate(120%,-50%)" : "translate(0,-50%)")};
    transition: all 300ms ease-in-out;
`;

const ToggleButton = ({ children, callback, on = false }) => {
    const [isActive, setIsActive] = useState(on);

    return (
        <Flex>
            <Background isActive={on}>
                <Ball isActive={on} onClick={callback} />
            </Background>
            <p>{children}</p>
        </Flex>
    );
};

export default ToggleButton;
