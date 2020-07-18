import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Button from '../components/Button'
import Input from '../components/Input'

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
                <Input icon={<Icon name="codepen" size={30} />} />
                <Button title="Entrar" width={80} />
            </Box>
        </Container>
    )
}
