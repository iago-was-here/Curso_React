import { React, useState } from "react";
import { Container, Cleaner, Selector } from "./styles";
import PropTypes from "prop-types";


const Filter = ({ languages }) => {
    const selectors = languages.map(({ name, count, color }) => (
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
};

Filter.propTypes = {
    languages: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            count: PropTypes.number.isRequired,
            color: PropTypes.string,
        }).isRequired
    ).isRequired
}

export default Filter;