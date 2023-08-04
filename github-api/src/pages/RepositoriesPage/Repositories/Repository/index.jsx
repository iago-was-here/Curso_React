import React from "react";
import { Container, Description, Lang, Link, Name, Footer } from "./styles";

const Repository = () => {
    return (
        <Container color="#E03131">
            <Name>Repository Name</Name>
            <Description>Repository Description</Description>
            <Footer color="#E03131">
                <Lang>Repository Lang</Lang>
                <Link href="https://www.google.com" target="_blank">Ver</Link>
            </Footer>
        </Container>
    )
}

export default Repository;