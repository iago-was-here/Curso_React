import { React, useState } from "react";
import Profile from "./Profile";
import Filter from "./Filter";
import Repositories from "./Repositories";

import { Container, Sidebar, Main } from "./styles";
import { getLangsFrom } from "../../services/api";

const RepositoriesPage = () => {
    const user = {
        "login": "iago-was-here",
        "name": "Iago Ananias Silva",
        "avatar_url": "https://avatars.githubusercontent.com/u/54692659?v=4",
        "followers": 5,
        "following": 9,
        "company": "",
        "blog": "https://www.linkedin.com/in/iago-ananias-silva/",
        "location": "Poços de Caldas",
    };

    const repositories = [
        {
            "id": 650838459,
            "name": "MotoMove",
            "html_url": "https://github.com/iago-was-here/MotoMove",
            "description": "Repository for the moto taxi application. The project involves the disciplines: Database II and Web Programming II",
            "language": "Handlebars",
        },
        {
            "id": 472352381,
            "name": "Estrutura_de_Dados_I",
            "html_url": "https://github.com/iago-was-here/Estrutura_de_Dados_I",
            "description": "Curso de Estrutura de Dados I",
            "language": "C",
        },
    ]

    const languages = getLangsFrom(repositories);

    return (
        <Container>
            <Sidebar>
                <Profile user={user} />
                <Filter languages={languages} />
            </Sidebar>
            <Main>
                <Repositories repositories={repositories} />
            </Main>
        </Container>
    );
}

export default RepositoriesPage;