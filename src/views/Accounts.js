import React from 'react'

import Button from '../components/Button'

import { ContainerCenter } from './styles/MainStyled'
import { BoxLogo, Logo, NameChurch, TextGray } from './styles/AuthStyled'

export default Accounts = ({ navigation }) => {
    return (
        <ContainerCenter>
            <BoxLogo>
                <Logo />
                <NameChurch>Novidade de Vida Fortaleza</NameChurch>
                <TextGray>Seja bem-vindo(a)!</TextGray>
            </BoxLogo>

            <Button title="Cadastre-se" />
            <Button title="Login" outlined />
        </ContainerCenter>
    )
}
