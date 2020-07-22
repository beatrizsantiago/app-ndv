import React, { useState } from 'react'

import IntegrationService from '../services/IntegrationService'

import Button from '../components/Button'
import Input from '../components/Input'
import Select from '../components/Select'
import AlertAnimated from '../components/AlertAnimated'

import { Container } from './styles/MainStyled'
import { Title, Row, MiddleRow, BoxButtons } from './styles/RegisterLifeStyled'

export default RegisterLife = ({ navigation }) => {

    const [fullName, setFullName] = useState('')
    const [typeConversion, setTypeConversion] = useState(1)
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [birthday, setBirthday] = useState('')
    const [baptismOtherChurch, setBaptismOtherChurch] = useState(0)
    const [baptismToday, setBaptismToday] = useState(0)
    const [baptismMinister, setBaptismMinister] = useState('')
    const [showAlert, setShowAlert] = useState(false)
    const [messageAlert, setMessageAlert] = useState('')
    const [error, setError] = useState({})
    const [loading, setLoading] = useState(false)

    const handlePressRegister = () => {
    }

    return (
        <Container padding={10}>
            <Title>Cadastro Integração</Title>

            <Input label="Nome" value={fullName} onChangeText={text => setFullName(text)} outlined required />
            <Select label="Conversão" selectedValue={typeConversion} onValueChange={value => setTypeConversion(value)}
                datas={[
                    { label: 'Aceitou a Jesus', value: 1 },
                    { label: 'Reconciliação', value: 2 }
                ]}
            />
            <Input label="Telefone" value={phone} onChangeText={text => setPhone(text)} typeMask={'cel-phone'} options={{ maskType: 'BRL', withDDD: true, dddMask: '(99) ' }} keyboardType="numeric" masked outlined required />
            <Input label="E-mail" value={email} onChangeText={text => setEmail(text)} keyboardType="email-address" outlined />
            <Input label="Data de nascimento" value={birthday} onChangeText={text => setBirthday(text)} typeMask="custom" options={{ mask: '99/99/9999' }} keyboardType="numeric" outlined masked />
            <Row>
                <MiddleRow>
                    <Select
                        type="column"
                        label="Batizado em outra igreja?"
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
                        selectedValue={baptismToday}
                        onValueChange={value => setBaptismToday(value)}
                        datas={[
                            { label: 'Não', value: 0 },
                            { label: 'Sim', value: 1 }
                        ]}
                    />
                </MiddleRow>
            </Row>
            {baptismToday ? <Input label="Ministro do batismo" value={baptismMinister} onChangeText={text => setBaptismMinister(text)} outlined /> : null}

            <BoxButtons>
                <Button title="Salvar" onPress={() => handlePressRegister()} width={45} outlined />
                <Button title="Enviar" onPress={() => handlePressRegister()} width={45} />
            </BoxButtons>

        </Container>
    )
}
