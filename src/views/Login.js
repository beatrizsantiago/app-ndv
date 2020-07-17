import React from 'react'

import Button from '../components/Button'

import { Container } from './styles/MainStyled'
import { Background, Header, LogoWhite, Title, Box } from './styles/AuthStyled'

export default Login = ({ navigation }) => {
    return (
        <Container>
            <Background />
            <Header>
                <LogoWhite />
                <Title>Login</Title>
            </Header>
            <Box>
                <Button title="Entrar" width={80} />
            </Box>
        </Container>
    )
}
