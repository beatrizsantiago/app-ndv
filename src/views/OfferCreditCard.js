import React, { useEffect, useState } from 'react'
import { Animated } from 'react-native'
import NetInfo from "@react-native-community/netinfo"

import TabHeader from '../components/TabHeader'
import AlertAnimated from '../components/AlertAnimated'

import { Scroll } from './styles/MainStyled'
import {
    Header, HalfCircle, ViewCards, CardFront, CardBack, CardNumber, RowCard, CardName, ColumnCard, CardLabel, CardValidity, LineBlack,
    CardCode, Box, Row
} from './styles/OfferCreditCardStyled'

import Colors from '../themes/Colors'

export default OfferCreditCard = (props) => {

    const [numberCard, setNumberCard] = useState('')
    const [validity, setValidity] = useState('')
    const [code, setCode] = useState('')
    const [fullName, setFullName] = useState('')
    const [document, setDocument] = useState('')
    const [showAlert, setShowAlert] = useState(false)
    const [messageAlert, setMessageAlert] = useState('')
    const [loading, setLoading] = useState(false)

    let animatedValue = new Animated.Value(0)

    let frontInterpolate = animatedValue.interpolate({
        inputRange: [0, 180],
        outputRange: ['0deg', '180deg'],
    })

    let backInterpolate = animatedValue.interpolate({
        inputRange: [0, 180],
        outputRange: ['180deg', '360deg']
    })

    let frontOpacity = animatedValue.interpolate({
        inputRange: [89, 90],
        outputRange: [1, 0]
    })

    let backOpacity = animatedValue.interpolate({
        inputRange: [89, 90],
        outputRange: [0, 1]
    })

    const flippingFront = () => {
        animatedValue.setValue(180)

        Animated.spring(animatedValue, {
            toValue: 0,
            friction: 8,
            tension: 10,
            useNativeDriver: false,
        }).start()
    }

    const flippingBack = () => {
        animatedValue.setValue(0.0)

        Animated.spring(animatedValue, {
            toValue: 180,
            friction: 8,
            tension: 10,
            useNativeDriver: false,
        }).start()
    }

    const frontAnimatedStyle = {
        transform: [
            { rotateY: frontInterpolate }
        ]
    }

    const backAnimatedStyle = {
        transform: [
            { rotateY: backInterpolate }
        ]
    }

    const openAlert = message => {
        setMessageAlert(message)
        setShowAlert(true)
        setLoading(false)
    }

    return (
        <Scroll>
            <Header>
                <HalfCircle />

                <TabHeader {...props} colorTitle={Colors.secondary} />

                <ViewCards>
                    <CardFront as={Animated.View} style={[frontAnimatedStyle, { opacity: frontOpacity }]}>
                        <CardNumber value={numberCard} />
                        <RowCard>
                            <CardName value={fullName} />
                            <ColumnCard>
                                <CardLabel>Validade</CardLabel>
                                <CardValidity value={validity} />
                            </ColumnCard>
                        </RowCard>
                    </CardFront>

                    <CardBack as={Animated.View} style={[backAnimatedStyle, { opacity: backOpacity }]}>
                        <LineBlack />
                        <RowCard>
                            <CardCode value={code} />
                        </RowCard>
                    </CardBack>
                </ViewCards>
            </Header>

            <Box>
                <Input label="Número do Cartão" value={numberCard} onChangeText={text => setNumberCard(text)} editable={!loading} styleType="column" keyboardType="numeric" typeMask={'credit-card'} options={{ obfuscated: false }} masked outlined />
                <Row>
                    <Input label="Validade" value={validity} onChangeText={text => setValidity(text)} editable={!loading} styleType="column" widthContainer={49} typeMask={'custom'} options={{ mask: '99/99' }} keyboardType="numeric" masked outlined />
                    <Input label="CCV" value={code} onChangeText={text => setCode(text)} editable={!loading} styleType="column" widthContainer={49} typeMask={'custom'} options={{ mask: '999' }} onFocus={() => flippingBack()} onBlur={() => flippingFront()} keyboardType="numeric" outlined />
                </Row>
                <Input label="Nome" value={fullName} onChangeText={text => setFullName(text)} editable={!loading} styleType="column" maxLength={150} outlined />
                <Input label="Cpf" value={document} onChangeText={text => setDocument(text)} editable={!loading} styleType="column" keyboardType="numeric" typeMask="cpf" masked outlined />
            </Box>

            <AlertAnimated show={showAlert} onConfirmPressed={() => setShowAlert(false)} message={messageAlert} />
        </Scroll>
    )
}
