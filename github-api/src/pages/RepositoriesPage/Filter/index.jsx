import { React, useState } from "react";
import { Container, Cleaner, Selector } from "./styles";

const Filter = () => {
    const langs = [
        { name: 'JavaScript', count: 5, color: '#FCC419' },
        { name: 'Shell', count: 15, color: '#89DD13' },
        { name: 'PHP', count: 25, color: '#4263Eb' },
    ];

    const selectors = langs.map(({ name, count, color }) => (
        <Selector key={name.toLowerCase()} color={color}>
            <span>{name}</span>
            <span>{count}</span>
        </Selector >
    ));

    return (
        <Container>
            {selectors}
            <Cleaner>
                Limpar
            </Cleaner>
        </Container>
    );
}

export default Filter;