import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/Feather'
import NetInfo from "@react-native-community/netinfo"

import UserService from '../services/UserService'

import TabHeader from '../components/TabHeader'
import Input from '../components/Input'
import Button from '../components/Button'
import AlertAnimated from '../components/AlertAnimated'

import { Scroll } from './styles/MainStyled'
import { Background, Header, Circle, ImageProfile, TouchCircle, LargeBox, Name, Box, TitleSection, BoxButtons } from './styles/ProfileStyled'

export default Profile = (props) => {

    const [details, setDetails] = useState({})
    const [showAlert, setShowAlert] = useState(false)
    const [messageAlert, setMessageAlert] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getDatas()
    }, [])

    const getDatas = () => {
        setLoading(true)
        NetInfo.fetch().then(state => {
            if (state.isConnected) {
                UserService.InfoProfile()
                    .then(resp => {
                        setDetails(resp)
                        setLoading(false)
                    })
                    .catch(error => {

                    })

            } else {
                openAlert('É necessário ter conexão com a internet para continuar.')
            }
        })
    }

    const openAlert = message => {
        setMessageAlert(message)
        setShowAlert(true)
        setLoading(false)
    }

    return (
        <Scroll>
            <Header>
                <Background />
                <TabHeader {...props} />
                <Circle>
                    <ImageProfile />
                    <TouchCircle><Icon name="edit" color="#fff" size={26} /></TouchCircle>
                </Circle>
            </Header>

            <LargeBox>
                <Name>{details.name || ''}</Name>
            </LargeBox>

            <Box>
                <Input label="E-mail" value={details.email || ''} editable={false} textAlign="right" outlined />
                <Input label="Telefone" value={details.phone || ''} editable={false} textAlign="right" outlined />

                <TitleSection>Informações do usuário</TitleSection>
                <Input label="Tipo de Usuário" value={details.userType || ''} editable={false} textAlign="right" outlined />
                <Input label="Mentor" value={details.mentor || ''} editable={false} textAlign="right" outlined />
                <Input label="Rede" value={details.net?.toString() || ''} editable={false} textAlign="right" outlined />
            </Box>

            <BoxButtons>
                <Button title="Alterar Senha" width={45} outlined />
                <Button title="Alterar Dados" width={45} outlined />
            </BoxButtons>

            <AlertAnimated show={showAlert} onConfirmPressed={() => setShowAlert(false)} message={messageAlert} />
        </Scroll>
    )
}
