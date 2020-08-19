import React, { useEffect, useState, useCallback } from 'react'
import { RefreshControl } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import NetInfo from "@react-native-community/netinfo"

import IntegrationService from '../services/IntegrationService'
import UserService from '../services/UserService'

import Loading from '../components/Loading'
import TabHeader from '../components/TabHeader'
import ModalFeedback from '../components/ModalFeedback'

import { Scroll } from './styles/MainStyled'
import { Background, Header, Box, SamllBox, TextWhite, Line, TextLabel } from './styles/ListLifesStyled'

import Colors from '../themes/Colors'

export default ListLifes = (props) => {

    const [listLifes, setListLifes] = useState([])
    const [loading, setLoading] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [selectLife, setSelectLife] = useState({})
    const [showAlert, setShowAlert] = useState(false)
    const [refreshing, setRefreshing] = useState(false)

    useEffect(() => {
        getListLifes()
    }, [])

    const getListLifes = () => {
        setLoading(true)

        NetInfo.fetch().then(state => {
            if (state.isConnected) {
                IntegrationService.GetLifes()
                    .then(resp => {
                        setListLifes(resp)
                        setLoading(false)
                    })
                    .catch(async error => {
                        if (error.status == 401) {
                            await UserService.Logout()
                            navigation.reset({ routes: [{ name: 'Login', params: { error: 401 }, }] })
                        }
                    })

            } else {
                setShowAlert(true)
                setLoading(false)
            }
        })
    }

    const sendFeedback = (life) => {
        setSelectLife(life)
        setShowModal(true)
    }

    const onRefresh = useCallback(() => {
        setRefreshing(true)
        getListLifes()
        setRefreshing(false)
    }, [refreshing])

    const showLifes = () => listLifes.map((life, index) => (
        <Line key={index} onPress={() => sendFeedback(life)}>
            <TextLabel>{life.fullName}</TextLabel>
            <TextLabel>{life.phone}</TextLabel>
        </Line>
    ))

    return (
        <Scroll refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
            {
                loading ?
                    <Loading />
                    :
                    <>
                        <Header>
                            <Background />
                            <TabHeader {...props} />
                            <Box>
                                <SamllBox>
                                    <Icon name="clipboard-account-outline" color={Colors.white} size={35} />
                                    <TextWhite>05 Pessoas</TextWhite>
                                </SamllBox>
                                <SamllBox>
                                    <Icon name="ballot-recount-outline" color={Colors.white} size={35} />
                                    <TextWhite>15 Feedbacks</TextWhite>
                                </SamllBox>
                            </Box>
                        </Header>
                        {showLifes()}
                    </>
            }
            <ModalFeedback open={showModal} onClosedPress={() => setShowModal(false)} datas={selectLife} />
            <AlertAnimated show={showAlert} onConfirmPressed={() => setShowAlert(false)} message="É necessário ter conexão com a internet para continuar." />
        </Scroll>
    )
}
