import React from "react";
import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    Wrapper
} from './styles'
import { Button } from "../Button";
import logo from '../../assets/logo-dio.png'
import { UserPicture } from "./styles";

const Header = ({autenticado}) => {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt="Logo da Dio" />
                    {autenticado ? (
                        <>
                        <BuscarInputContainer>
                            <Input placeholder='Buscar...'/>
                        </BuscarInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                        </>
                    ): null}
                </Row>
                <Row>
                    {autenticado ? (
                        <UserPicture src="https://avatars.githubusercontent.com/u/138341306?s=400&u=1ffd2e54bc577105c88ee8392595cbba4104f293&v=4"/>
                    ) : (
                        <>
                        <MenuRight href="#">Home</MenuRight>
                        <Button tittle="Entrar"/>
                        <Button tittle="Cadastrar"/>
                        </>
                    )}
                </Row>
            </Container>
        </Wrapper>
    )
}

export { Header }