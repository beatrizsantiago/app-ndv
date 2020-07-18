import React, { useEffect } from 'react'
import { Animated, Easing } from 'react-native'

import { ContainerCenter } from './styles/MainStyled'
import { BoxLogo, Logo, NameChurch, Progress, Fill } from './styles/AuthStyled'

export default Splash = ({ navigation }) => {

    let scaleValue = new Animated.Value(0)

    const animate = () => {
        scaleValue.setValue(0)

        Animated.timing(scaleValue, {
            toValue: 174,
            duration: 2000,
            easing: Easing.ease,
            useNativeDriver: false,
        }).start()
    }

    useEffect(() => {
        animate()
        setTimeout(() => {
            navigation.reset({ routes: [{ name: 'Accounts' }] })
        }, 2000);
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
