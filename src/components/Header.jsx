import React from "react";
import styled from "styled-components";

const SHeader = styled.header`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem;
`;

const Header = () => {
    return (
        <SHeader>
            <h1>React UI Snippets</h1>
        </SHeader>
    );
};

export default Header;
