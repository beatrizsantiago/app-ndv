import React, { useEffect, useState } from 'react'
import NetInfo from "@react-native-community/netinfo"

import TabHeader from '../components/TabHeader'
import AlertAnimated from '../components/AlertAnimated'
import Input from '../components/Input'

import { Scroll } from './styles/MainStyled'
import { Label, Box, LargeBox, Circle, Icon, Title, LabelRed, BoxTransfer } from './styles/OfferStyled'

import Colors from '../themes/Colors'

export default Offer = (props) => {

    const [valueOffer, setValueOffer] = useState('20,00')
    const [showAlert, setShowAlert] = useState(false)
    const [messageAlert, setMessageAlert] = useState('')
    const [loading, setLoading] = useState(false)

    const openAlert = message => {
        setMessageAlert(message)
        setShowAlert(true)
        setLoading(false)
    }

    const handlePress = (type) => {
        if (valueOffer == '') {
            
        } else {
            if (type == 0) {
                
            } else if (type ==1) {
                props.navigation.navigate('OfferCreditCard')
            }
        }
    }

    return (
        <Scroll>
            <TabHeader {...props} colorItems={Colors.secondary} />

            <Label>Digite um valor</Label>
            <Input value={valueOffer} onChangeText={text => setValueOffer(text)} typeMask="money" options={{ precision: 2, separator: ',', delimiter: '.', unit: 'R$', suffixUnit: '' }} textAlign="center" widthContainer={80} outlined masked />

            <Label type={1}>Selecione uma opção de oferta</Label>

            <Box>
                <LargeBox onPress={() => handlePress(0)}>
                    <Circle>
                        <Icon />
                    </Circle>
                    <Title>Gerar um Boleto</Title>
                </LargeBox>
            </Box>

            <Box>
                <LargeBox onPress={() => handlePress(1)}>
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
                <Input label="Nome" value="Igreja Apostólica Novidade de Vida Fortaleza" editable={false} textAlign="right" multiline={true} outlined rounded />
            </BoxTransfer>

            <AlertAnimated show={showAlert} onConfirmPressed={() => setShowAlert(false)} message={messageAlert} />
        </Scroll>
    )
}
