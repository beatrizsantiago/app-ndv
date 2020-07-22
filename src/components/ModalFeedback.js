import React, { useState } from 'react'
import styled from 'styled-components/native'
import NetInfo from "@react-native-community/netinfo"

import IntegrationService from '../services/IntegrationService'

import Button from './Button'
import AlertAnimated from './AlertAnimated'

import Colors from '../themes/Colors'
import Fonts from '../themes/Fonts'

import { CenterColumn, MiddleCenterColumn, MiddleCenterRow } from '../themes/StyleConstants'

export default ModalFeedback = ({ open, onClosedPress, datas = {} }) => {

    const [feedback, setFeedback] = useState('')
    const [showAlert, setShowAlert] = useState(false)
    const [messageAlert, setMessageAlert] = useState('')
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    const closeModal = () => {
        setFeedback('')
        onClosedPress()
    }

    const closeAlert = () => {
        setShowAlert(false)
        setLoading(false)
        if (success) {
            closeModal()
        }
    }

    const openAlert = message => {
        setMessageAlert(message)
        setShowAlert(true)
    }

    const send = () => {
        setLoading(true)
        if (feedback.length < 50) {
            openAlert('É necessário que a mensagem possua no mínimo 50 caracteres.')

        } else {
            NetInfo.fetch().then(state => {
                if (state.isConnected) {
                    IntegrationService.SendFeedback(datas.id, feedback)
                        .then(() => {
                            setSuccess(true)
                            openAlert('Feedback enviado com sucesso.')
                        })
                        .catch(error => {
                            openAlert('Não foi possível enviar seu feedback. Tente novamente mais tarde.')
                        })

                } else {
                    openAlert('É necessário ter conexão com a internet para enviar um feedback.')
                }
            })
        }
    }

    return (
        <ModalContainer visible={open}>
            <Background>
                <Container>
                    <Title>Novo feedback para {datas?.name}</Title>
                    <TextArea value={feedback} onChangeText={text => setFeedback(text)} editable={!loading} />
                    <BoxButtons>
                        <Button title="Cancelar" onPress={() => closeModal()} width={48} disabled={loading} outlined />
                        <Button title="Enviar" onPress={() => send()} width={48} disabled={loading} loading={loading} />
                    </BoxButtons>
                </Container>
                <AlertAnimated show={showAlert} onConfirmPressed={() => closeAlert()} message={messageAlert} />
            </Background>
        </ModalContainer>
    )
}

const ModalContainer = styled.Modal.attrs({
    transparent: true,
    animationType: 'fade'
})`
    ${CenterColumn}
    width: 100%;
    flex: 1;
`

const Background = styled.View`
    ${CenterColumn}
    width: 100%;
    flex: 1;
    background-color: ${Colors.blackTransparent6};
`

const Container = styled.View`
    ${MiddleCenterColumn}
    width: 90%;
    padding: 25px;
    border-radius: 10px;
    background-color: ${Colors.white};
`

const Title = styled.Text`
    color: ${Colors.primary};
    font-size: 20px;
    font-family: ${Fonts.semiBold};
    text-align: center;
    width: 100%;
`

const TextArea = styled.TextInput.attrs({ multiline: true })`
    width: 100%;
    margin: 10px 0px;
    padding: 10px;
    border-radius: 5px;
    font-size: 18px;
    color: ${Colors.primary};
    font-family: ${Fonts.semiBold};
    background-color: ${Colors.backgroundGray};
`

const BoxButtons = styled.View`
    ${MiddleCenterRow}
    justify-content: space-around;
    width: 100%;
`