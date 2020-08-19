import React, { useEffect } from 'react'
import { Animated, Easing } from 'react-native'

import AsyncStorage from '@react-native-community/async-storage'
import StoreKeys from '../config/StoreKeys'

import { ContainerCenter } from './styles/MainStyled'
import { BoxLogo, Logo, NameChurch, Progress, Fill } from './styles/AuthStyled'

export default Splash = ({ navigation }) => {

    let scaleValue = new Animated.Value(0)

    const animate = () => {
        scaleValue.setValue(0)

        Animated.timing(scaleValue, {
            toValue: 174,
            duration: 1000,
            easing: Easing.ease,
            useNativeDriver: false,
        }).start()
    }

    const verifyToken = async () => {
        let token = await AsyncStorage.getItem(StoreKeys.UserToken)
        if (token) {
            setTimeout(() => navigation.reset({ routes: [{ name: 'Application' }] }), 800)

        } else {
            setTimeout(() => navigation.reset({ routes: [{ name: 'Accounts' }] }), 800)
        }
    }

    useEffect(() => {
        animate()
        verifyToken()
    }, [])

    return (
        <ContainerCenter>
            <BoxLogo>
                <Logo />
                <NameChurch>Novidade de Vida Fortaleza</NameChurch>
            </BoxLogo>
            <Progress>
                <Fill as={Animated.View} style={{ width: scaleValue }} />
            </Progress>
        </ContainerCenter>
    )
}
