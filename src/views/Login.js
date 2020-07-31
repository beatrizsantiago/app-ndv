import React, { useState } from 'react'
import NetInfo from "@react-native-community/netinfo"

import UserService from '../services/UserService'

import Button from '../components/Button'
import Input from '../components/Input'
import AlertAnimated from '../components/AlertAnimated'

import { Container } from './styles/MainStyled'
import { Background, Header, LogoWhite, Title, Box, TextGray, TextRed, Touch, Line } from './styles/AuthStyled'

export default Login = ({ navigation }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showAlert, setShowAlert] = useState(false)
    const [messageAlert, setMessageAlert] = useState('')
    const [loading, setLoading] = useState(false)

    const openAlert = message => {
        setMessageAlert(message)
        setShowAlert(true)
        setLoading(false)
    }

    const regexEmail = /[A-Za-z0-9][\w.]+@[a-z]+\.[a-z]{2}/

    const handlePressLogin = () => {
        setLoading(true)
        if (!email || !regexEmail.test(email)) {
            openAlert('É necessário informar um e-mail válido.')

        } else if (!password) {
            openAlert('Informe sua senha.')

        } else {
            NetInfo.fetch().then(state => {
                if (state.isConnected) {
                    UserService.Login(email, password)
                        .then(() => {
                            setLoading(false)
                            navigation.reset({ routes: [{ name: 'Application' }] })
                        })
                        .catch(error => {
                            openAlert('Não foi possível realizar o login. Tente novamente mais tarde!')
                        })

                } else {
                    openAlert('É necessário ter conexão com a internet para realizar o login.')
                }
            })
        }
    }

    return (
        <Container>
            <Background />
            <Header>
                <LogoWhite />
                <Title>Login</Title>
            </Header>
            <Box>
                <Input value={email} onChangeText={text => setEmail(text)} icon="account-circle-outline" outlined />
                <Input inputKey={'password'} value={password} onChangeText={text => setPassword(text)} icon="form-textbox-password" outlined secureTextEntry />
                <Button title="Entrar" width={80} onPress={() => handlePressLogin()} loading={loading} />
            </Box>
            <Line>
                <TextGray>Não possui uma conta? </TextGray>
                <Touch onPress={() => navigation.navigate('Register')}><TextRed>Cadastre-se aqui.</TextRed></Touch>
            </Line>

            <AlertAnimated show={showAlert} onConfirmPressed={() => setShowAlert(false)} message={messageAlert} />
        </Container>
    )
}
