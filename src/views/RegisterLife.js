import React, { useState } from 'react'
import NetInfo from "@react-native-community/netinfo"

import IntegrationService from '../services/IntegrationService'

import Button from '../components/Button'
import Input from '../components/Input'
import Select from '../components/Select'
import AlertAnimated from '../components/AlertAnimated'

import { Container } from './styles/MainStyled'
import { Title, Row, MiddleRow } from './styles/RegisterLifeStyled'

export default RegisterLife = ({ navigation }) => {

    const [fullName, setFullName] = useState('')
    const [typeConversion, setTypeConversion] = useState(1)
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')
    const [baptismOtherChurch, setBaptismOtherChurch] = useState(0)
    const [baptismToday, setBaptismToday] = useState(0)
    const [baptismMinister, setBaptismMinister] = useState('')
    const [showAlert, setShowAlert] = useState(false)
    const [messageAlert, setMessageAlert] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const openAlert = message => {
        setMessageAlert(message)
        setShowAlert(true)
        setLoading(false)
    }

    const sendDatas = () => {
        NetInfo.fetch().then(state => {
            if (state.isConnected) {
                IntegrationService.RegisterNewLife(fullName, typeConversion, phone, email, parseInt(age), baptismOtherChurch ? true : false, baptismToday ? true : false, baptismMinister)
                    .then(() => {
                        openAlert('Cadastro realizado com sucesso.')
                        setLoading(false)
                        setFullName('')
                        setTypeConversion(1)
                        setPhone('')
                        setEmail('')
                        setAge('')
                        setBaptismOtherChurch(0)
                        setBaptismToday(0)
                        setBaptismMinister('')
                    })
                    .catch(error => {
                        setLoading(false)
                        openAlert('Não foi possível salvar os dados. Não feche o aplicativo, entre em contado com o líder da integração.')
                    })
            } else {
                openAlert('É necessário ter conexão com a internet para realizar salvar os dados.')
            }
        })
    }

    const handlePressRegister = () => {
        setLoading(true)
        setError('')

        if (fullName.length < 3) {
            setError('fullName')
            openAlert('É necessário que o Nome tenha no mínimo 3 caracteres.')

        } else if (phone.length < 15) {
            setError('phone')
            openAlert('Insira um telefone válido.')

        } else if (baptismToday && baptismMinister.length < 3) {
            setError('minister')
            openAlert('É necessário que o nome do Ministro de Batismo tenha no mínimo 3 caracteres.')

        } else {
            sendDatas()
        }
    }

    const findError = label => {
        let isError = error.indexOf(label)
        if (isError > -1) {
            return true
        } else {
            return false
        }
    }


    return (
        <Container padding={10}>
            <Title>Cadastro Integração</Title>

            <Input label="Nome" value={fullName} onChangeText={text => setFullName(text)} editable={!loading} error={findError('fullName')} outlined required />
            <Select label="Conversão" selectedValue={typeConversion} onValueChange={value => setTypeConversion(value)} enabled={!loading}
                datas={[
                    { label: 'Aceitou a Jesus', value: 1 },
                    { label: 'Reconciliação', value: 2 }
                ]}
            />
            <Input label="Telefone" value={phone} onChangeText={text => setPhone(text)} editable={!loading} error={findError('phone')} typeMask={'cel-phone'} options={{ maskType: 'BRL', withDDD: true, dddMask: '(99) ' }} keyboardType="numeric" masked outlined required />
            <Input label="E-mail" value={email} onChangeText={text => setEmail(text)} editable={!loading} keyboardType="email-address" outlined />
            <Input label="Idade" value={age} onChangeText={text => setAge(text)} editable={!loading} keyboardType="numeric" outlined />
            <Row>
                <MiddleRow>
                    <Select
                        type="column"
                        label="Batizado em outra igreja?"
                        enabled={!loading}
                        selectedValue={baptismOtherChurch}
                        onValueChange={value => setBaptismOtherChurch(value)}
                        datas={[
                            { label: 'Não', value: 0 },
                            { label: 'Sim', value: 1 }
                        ]}
                    />
                </MiddleRow>
                <MiddleRow>
                    <Select
                        type="column"
                        label="Se batizou hoje?"
                        enabled={!loading}
                        selectedValue={baptismToday}
                        onValueChange={value => setBaptismToday(value)}
                        datas={[
                            { label: 'Não', value: 0 },
                            { label: 'Sim', value: 1 }
                        ]}
                    />
                </MiddleRow>
            </Row>
            {baptismToday ? <Input label="Ministro do batismo" value={baptismMinister} onChangeText={text => setBaptismMinister(text)} error={findError('minister')} editable={!loading} outlined required /> : null}

            <Button title="Enviar" onPress={() => handlePressRegister()} loading={loading} disabled={loading} />

            <AlertAnimated show={showAlert} onConfirmPressed={() => setShowAlert(false)} message={messageAlert} />
        </Container>
    )
}
