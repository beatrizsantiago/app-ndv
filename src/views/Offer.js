import React, { useEffect, useState } from 'react'
import NetInfo from "@react-native-community/netinfo"

import TabHeader from '../components/TabHeader'
import AlertAnimated from '../components/AlertAnimated'
import Input from '../components/Input'

import { Scroll } from './styles/MainStyled'
import { Label, Box, LargeBox, Circle, Icon, Title, LabelRed, BoxTransfer } from './styles/OfferStyled'

import Colors from '../themes/Colors'

export default Offer = (props) => {

    const [valueOffer, setValueOffer] = useState('')
    const [showAlert, setShowAlert] = useState(false)
    const [messageAlert, setMessageAlert] = useState('')
    const [loading, setLoading] = useState(false)

    const openAlert = message => {
        setMessageAlert(message)
        setShowAlert(true)
        setLoading(false)
    }

    return (
        <Scroll>
            <TabHeader {...props} colorItems={Colors.secondary} />

            <Label>Digite um valor</Label>
            <Input value={valueOffer} onChangeText={text => setValueOffer(text)} typeMask="money" options={{ precision: 2, separator: ',', delimiter: '.', unit: 'R$', suffixUnit: '' }} textAlign="center" widthContainer={80} outlined masked />

            <Label type={1}>Selecione uma opção de oferta</Label>

            <Box>
                <LargeBox>
                    <Circle>
                        <Icon />
                    </Circle>
                    <Title>Gerar um boleto</Title>
                </LargeBox>
            </Box>

            <Box>
                <LargeBox>
                    <Title>Cartão de Crédito</Title>
                    <Circle>
                        <Icon type={1} />
                    </Circle>
                </LargeBox>
            </Box>

            <LabelRed>- Ou faça uma transferência -</LabelRed>

            <BoxTransfer>
                <Input label="Banco" value="Bradesco" editable={false} textAlign="right" outlined rounded />
                <Input label="Conta c/ Dígito" value="0000-0" editable={false} textAlign="right" outlined rounded />
                <Input label="Agência" value="0000" editable={false} textAlign="right" outlined rounded />
                <Input label="CNPJ" value="00.000.000/0000-00" editable={false} textAlign="right" outlined rounded />
                <Input label="Nome" value="Ingreja Apostólica Novidade de Vida Fortaleza" editable={false} textAlign="right" multiline={true} outlined rounded />
            </BoxTransfer>

            <AlertAnimated show={showAlert} onConfirmPressed={() => setShowAlert(false)} message={messageAlert} />
        </Scroll>
    )
}
