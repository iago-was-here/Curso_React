import { React, useState } from "react";
import Profile from "./Profile";
import Filter from "./Filter";

import { Container, Sidebar, Main } from "./styles";

const RepositoriesPage = () => {
    return (
        <Container>
            <Sidebar>
                <Profile />
                <Filter />
            </Sidebar>
            <Main>
                Main
            </Main>
        </Container>
    );
}

export default RepositoriesPage