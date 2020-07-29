import React, { useEffect, useState } from 'react'
import NetInfo from "@react-native-community/netinfo"
import MapView, { Marker, Callout } from 'react-native-maps'
import Icon from 'react-native-vector-icons/Ionicons'
import Geolocation from '@react-native-community/geolocation'

import CapService from '../services/CapService'

import TabHeader from '../components/TabHeader'
import Input from '../components/Input'
import Select from '../components/Select'
import Loading from '../components/Loading'
import AlertAnimated from '../components/AlertAnimated'

import { Container } from './styles/MainStyled'
import { BoxGray, Row, MiddleBox, ButtonSearch } from './styles/SearchCapStyled'

import Colors from '../themes/Colors'

export default SearchCap = (props) => {

    const [region, setRegion] = useState({
        latitude: 0.0,
        longitude: 0.0,
        latitudeDelta: 0.03,
        longitudeDelta: 0.03
    })
    const [allCaps, setAllCaps] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        listAllCaps()
    }, [])

    listAllCaps = () => {
        setLoading(true)
        CapService.GetCaps()
            .then(resp => {
                setAllCaps(resp)
                setLoading(false)
            })
            .catch(error => {
                setLoading(false)
            })

        setCurrentPosition()
    }

    const setCurrentPosition = (lat, long, latD, longD) => {
        Geolocation.getCurrentPosition(
            info => {
                setRegion({
                    latitude: lat ? lat : info.coords.latitude,
                    longitude: long ? long : info.coords.longitude,
                    latitudeDelta: latD ? latD : 0.03,
                    longitudeDelta: longD ? longD : 0.03
                })
            },
            error => { },
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        )
    }

    return (
        <Container>
            <TabHeader {...props} colorItems={Colors.secondary} />

            {
                loading ?
                    <Loading />
                    :
                    <BoxGray>
                        <Row>
                            <MiddleBox width={85}>
                                <Input placeholder="Digite uma rua, bairro ou cidade..." rounded />
                            </MiddleBox>
                            <ButtonSearch>
                                <Icon name="search" color={Colors.white} size={26} />
                            </ButtonSearch>
                        </Row>
                        <Row>
                            <MiddleBox width={48.5}>
                                <Select label="Dia da Semana" type="column" rounded
                                    datas={[
                                        { label: 'Selecione', value: "" },
                                        { label: 'Segunda', value: 1 },
                                        { label: 'Terça', value: 2 },
                                        { label: 'Quarta', value: 3 },
                                        { label: 'Quinta', value: 4 },
                                        { label: 'Sexta', value: 5 },
                                        { label: 'Sábado', value: 6 },
                                        { label: 'Domingo', value: 7 },
                                    ]}
                                />
                            </MiddleBox>
                            <MiddleBox width={48.5}>
                                <Select label="Horário" type="column" rounded
                                    datas={[
                                        { label: 'Selecione', value: "" },
                                        { label: '19h', value: 1 },
                                        { label: '19:30h', value: 2 },
                                        { label: '20h', value: 3 },
                                        { label: '20:30h', value: 4 },
                                    ]}
                                />
                            </MiddleBox>
                        </Row>

                        <MapView region={region} style={{ flex: 1, width: '100%' }} showsUserLocation={true} showsMyLocationButton={false}>
                            {
                                allCaps.map((cap, index) =>
                                    <Marker key={index} coordinate={{ latitude: parseFloat(cap.latitude), longitude: parseFloat(cap.longitude) }} pinColor={Colors.secondary} />
                                )
                            }
                        </MapView>
                    </BoxGray>
            }
        </Container>
    )
}