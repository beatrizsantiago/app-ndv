import React, { useState } from 'react'

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

    const openAlert = message => {
        setMessageAlert(message)
        setShowAlert(true)
        setLoading(false)
    }

    const sendDatas = () => {
        UserService.Register(fullName, phone, email, password, confirmPassword)
            .then(() => {
                setLoading(false)
            })
            .catch(error => {
                openAlert('Não foi possível realizar o seu cadastro. Tente novamente mais tarde!')
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
                <Input label="Nome Completo" outlined />
                <Input label="Telefone" outlined />
                <Input label="E-mail" outlined />
                <Input label="Senha" icon="eye" outlined />
                <Input label="Confirmar Senha" icon="eye" outlined />

                <RowButtons>
                    <Button title="Voltar" onPress={() => navigation.goBack()} width={48} outlined />
                    <Button title="Enviar" onPress={() => handlePressSend()} width={48} loading={loading} />
                </RowButtons>
            </Box>
            <Line>
                <TextGray>Já é cadastrado? </TextGray>
                <Touch onPress={() => navigation.navigate('Login')}><TextRed>Faça login.</TextRed></Touch>
            </Line>

            <AlertAnimated show={showAlert} onConfirmPressed={() => setShowAlert(false)} message={messageAlert} />
        </Scroll>
    )
}
