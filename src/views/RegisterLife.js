import React, { useEffect } from 'react'

import IntegrationService from '../services/IntegrationService'

import Button from '../components/Button'
import Input from '../components/Input'
import AlertAnimated from '../components/AlertAnimated'

import { Container } from './styles/MainStyled'

export default RegisterLife = ({ navigation }) => {

    return (
        <Container padding={10}>
            <Input label="Nome" outlined />
            <Input label="Telefone" outlined />
            <Input label="Conversão" outlined />
            <Input label="E-mail" outlined />
            <Input label="Bairro" outlined />
            <Input label="Data de nascimento" outlined />
            <Input label="Batizado em outra igreja?" outlined />
            <Input label="Se batizou hoje?" outlined />
            <Input label="Ministro do batismo" outlined />
        </Container>
    )
}
