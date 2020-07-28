import React, { useEffect, useState } from 'react'
import NetInfo from "@react-native-community/netinfo"
import MapView from 'react-native-maps'
import Icon from 'react-native-vector-icons/Ionicons'

import TabHeader from '../components/TabHeader'
import Input from '../components/Input'
import Loading from '../components/Loading'
import AlertAnimated from '../components/AlertAnimated'

import { Container } from './styles/MainStyled'
import { BoxGray, Row, MiddleBox, ButtonSearch } from './styles/SearchCapStyled'

import Colors from '../themes/Colors'

export default SearchCap = (props) => {
    return (
        <Container>
            <TabHeader {...props} colorItems={Colors.secondary} />

            <BoxGray>
                <Row>
                    <MiddleBox width={85}>
                        <Input rounded />
                    </MiddleBox>
                    <ButtonSearch>
                        <Icon name="search" color={Colors.white} size={26} />
                    </ButtonSearch>
                </Row>
                <Row>
                    <MiddleBox width={85}>
                        <Input rounded />
                    </MiddleBox>
                </Row>

                <MapView
                    style={{ width: '100%', flex: 1 }}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />
            </BoxGray>
        </Container>
    )
}