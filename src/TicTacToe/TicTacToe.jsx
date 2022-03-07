import React, { useState } from "react";
import styled from "styled-components";
import Cell from "./Cell";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 2rem 0;
`;

const StyledBoard = styled.div`
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(3, auto);
`;

const SOutput = styled.div`
    margin: 1rem 0;
    padding: 0.2rem 0;
    min-height: 100px;
    display: grid;
    justify-items: center;
    gap: 0.9rem;
`;

const SButton = styled.button`
    padding: 0.5rem 1.2rem;
    outline: none;
    background: none;
    border-radius: 10px;
    border: 1px solid white;
    font-size: 1.2rem;
    color: white;
    cursor: pointer;

    &:hover {
        background-color: white;
        color: #222;
    }
`;

const SMessage = styled.p`
    font-size: 1.1rem;
`;

const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const TicTacToe = () => {
    const [turn, setTurn] = useState("x");
    const [cells, setCells] = useState(Array(9).fill(""));
    const [winner, setWinner] = useState(null);

    const restartHandler = () => {
        setCells(Array(9).fill(""));
        setWinner(null);
    };

    const checkWinner = (cells, turn) => {
        return WINNING_COMBINATIONS.some((combo) => {
            return combo.every((index) => {
                return cells[index] === turn;
            });
        });
    };

    const checkDraw = (cells) => {
        return [...cells].every((cell) => cell !== "");
    };

    const handleClick = (num) => {
        if (cells[num] !== "") {
            alert("already clicked");
            return;
        }

        const updatedCells = [...cells];

        if (turn === "x") {
            updatedCells[num] = "x";
            setTurn("o");
        } else {
            updatedCells[num] = "o";
            setTurn("x");
        }

        console.log(`Checking: ${turn} just entered`);

        if (checkWinner(updatedCells, turn)) {
            setWinner(turn);
        } else if (checkDraw(updatedCells)) {
            setWinner("draw");
        }

        setCells(updatedCells);
    };
    return (
        <Wrapper>
            <h2>Tic Tac Toe</h2>
            <p>Turn: {turn}</p>
            <StyledBoard>
                {cells.map((_, i) => (
                    <Cell turn={turn} key={i} cells={cells} num={i} handleClick={() => handleClick(i)} />
                ))}
            </StyledBoard>
            <SOutput>
                {winner === "draw" && <SMessage>Draw!</SMessage>}
                {winner && winner !== "dPpPraw" && <SMessage>Winner is {winner}</SMessage>}
                {winner && <SButton onClick={restartHandler}>Restart</SButton>}
            </SOutput>
        </Wrapper>
    );
};

export default TicTacToe;
