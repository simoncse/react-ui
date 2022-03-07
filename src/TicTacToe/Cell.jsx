import styled from "styled-components";

const StyledCellO = styled.div`
    width: 80px;
    height: 80px;
    border: 1px solid white;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    /* remove outside border */
    &:nth-child(-n + 3) {
        border-top: none;
    }

    &:nth-child(-n + 9) {
        border-bottom: none;
    }

    &:nth-child(3n + 1) {
        border-left: none;
    }

    &:nth-child(3n + 3) {
        border-right: none;
    }
    /*  */

    &::before,
    &::after {
        content: "";
        position: absolute;
        border-radius: 50%;
    }

    &::before {
        width: 60px;
        height: 60px;
        background-color: ${(props) => props.placed && "white"};
    }

    &::after {
        width: 50px;
        height: 50px;
        background-color: ${(props) => props.placed && "#222"};
    }

    &:hover::after {
        background-color: #222;
    }

    &:hover::before {
        background-color: ${(props) => !props.placed && "gray"};
    }
`;

const StyledCellX = styled.div`
    width: 80px;
    height: 80px;
    border: 1px solid white;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    /* remove outside border */
    &:nth-child(-n + 3) {
        border-top: none;
    }

    &:nth-child(-n + 9) {
        border-bottom: none;
    }

    &:nth-child(3n + 1) {
        border-left: none;
    }

    &:nth-child(3n + 3) {
        border-right: none;
    }
    /*  */

    &::before,
    &::after {
        content: "";
        position: absolute;
        width: 55px;
        height: 5px;
        background-color: ${(props) => props.placed && "white"};
    }

    &::after {
        transform: rotate(45deg);
    }

    &::before {
        transform: rotate(-45deg);
    }

    &:hover::before,
    &:hover::after {
        background-color: ${(props) => !props.placed && "gray"};
    }
`;

const Cell = ({ turn, handleClick, num, cells }) => {
    // Handle cells that are open
    if ((cells[num] === "") & (turn === "x")) {
        return <StyledCellX onClick={handleClick} placed={false} />;
    }

    if ((cells[num] === "") & (turn === "o")) {
        return <StyledCellO onClick={handleClick} placed={false} />;
    }

    // Handle cells that have been placed
    if (cells[num] === "x") {
        return <StyledCellX onClick={handleClick} placed={true} />;
    }

    if (cells[num] === "o") {
        return <StyledCellO onClick={handleClick} placed={true} />;
    }
};

export default Cell;
