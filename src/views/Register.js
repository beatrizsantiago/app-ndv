import React, { useState } from 'react'
import NetInfo from "@react-native-community/netinfo"

import UserService from '../services/UserService'

import Button from '../components/Button'
import Input from '../components/Input'
import AlertAnimated from '../components/AlertAnimated'

import { Scroll } from './styles/MainStyled'
import { Background, LogoWhite, TextGray, TextRed, Touch, Line, Header, Title, Box, RowButtons } from './styles/AuthStyled'

export default Register = ({ navigation }) => {

    const [fullName, setFullName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showAlert, setShowAlert] = useState(false)
    const [messageAlert, setMessageAlert] = useState('')
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    const closeAlert = () => {
        setLoading(false)
        if (success) {
            setShowAlert(false)
            navigation.reset({ routes: [{ name: 'Login' }] })

        } else {
            setShowAlert(false)
        }
    }

    const openAlert = message => {
        setMessageAlert(message)
        setShowAlert(true)
    }

    const sendDatas = () => {
        NetInfo.fetch().then(state => {
            if (state.isConnected) {
                UserService.Register(fullName, phone, email, password, confirmPassword)
                    .then(() => {
                        setSuccess(true)
                        setFullName('')
                        setPhone('')
                        setEmail('')
                        setPassword('')
                        setConfirmPassword('')
                        openAlert('Cadastro realizado com sucesso! Verifique o seu e-mail e confirme sua conta para realizar o login.')
                    })
                    .catch(error => {
                        openAlert('Não foi possível realizar o seu cadastro. Tente novamente mais tarde!')
                    })

            } else {
                openAlert('É necessário ter conexão com a internet para realizar o cadastro.')
            }
        })
    }

    const regexEmail = /[A-Za-z0-9][\w.]+@[a-z]+\.[a-z]{2}/

    const handlePressSend = () => {
        setLoading(true)
        if (fullName.length < 10) {
            openAlert('O Nome precisa ter mais de 10 caracteres.')

        } else if (phone.length < 15) {
            openAlert('É necessário inserir um Telefone válido.')

        } else if (!email || !regexEmail.test(email)) {
            openAlert('É necessário inserir um E-mail válido.')

        } else if (password.length < 6) {
            openAlert('A senha precisa ter no mínimo 6 caracteres.')

        } else if (confirmPassword != password) {
            openAlert('As senhas não se correspondem.')

        } else {
            sendDatas()
        }
    }

    return (
        <Scroll>
            <Background register={true} />
            <Header>
                <LogoWhite />
                <Title>Cadastre-se</Title>
            </Header>
            <Box>
                <Input label="Nome Completo" editable={!loading} outlined />
                <Input label="Telefone" editable={!loading} outlined />
                <Input label="E-mail" editable={!loading} outlined />
                <Input label="Senha" editable={!loading} icon="eye" outlined />
                <Input label="Confirmar Senha" editable={!loading} icon="eye" outlined />

                <RowButtons>
                    <Button title="Voltar" onPress={() => navigation.goBack()} disabled={loading} width={48} outlined />
                    <Button title="Enviar" onPress={() => handlePressSend()} width={48} disabled={loading} loading={loading} />
                </RowButtons>
            </Box>
            <Line>
                <TextGray>Já é cadastrado? </TextGray>
                <Touch onPress={() => navigation.navigate('Login')}><TextRed>Faça login.</TextRed></Touch>
            </Line>

            <AlertAnimated show={showAlert} onConfirmPressed={() => closeAlert()} message={messageAlert} />
        </Scroll>
    )
}
