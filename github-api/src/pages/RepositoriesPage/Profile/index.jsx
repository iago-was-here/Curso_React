import { React, useState } from "react";
import { MdGroup, MdLocationCity, MdWork, MdLink } from "react-icons/md";

import { Container, Header, Avatar, Login, Name, Inner, Data } from "./styles";

const Profile = () => {
    return (
        <Container>
            <Header>
                <Avatar src="https://avatars.githubusercontent.com/u/54692659?v=4" />
                <Login>iago-was-here</Login>
                <Name>Iago Ananias Silva</Name>
            </Header>
            <Inner>
                <Data>
                    <MdGroup size={20} />
                    30&nbsp;<i>Seguidores</i>&nbsp;&middot;10&nbsp;<i>seguindo</i>
                </Data>
                <Data>
                    <MdWork size={20} />
                    BMS Tecnologia
                </Data>
                <Data>
                    <MdLocationCity size={20} />
                    Poços de Caldas
                </Data>
                <Data>
                    <MdLink size={20} />
                    <a href="https://bmstecnologia.com.br">bmstecnologia.com.br</a>
                </Data>
            </Inner>
        </Container>
    );
}

export default Profile