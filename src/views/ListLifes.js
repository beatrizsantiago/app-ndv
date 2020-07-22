import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import IntegrationService from '../services/IntegrationService'

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

    useEffect(() => {
        getListLifes()
    }, [])

    const getListLifes = () => {
        setLoading(true)
        IntegrationService.GetLifes()
            .then(resp => {
                setListLifes(resp)
                setLoading(false)
            })
    }

    const sendFeedback = (life) => {
        setSelectLife(life)
        setShowModal(true)
    }

    const showLifes = () => listLifes.map((life, index) => (
        <Line key={index} onPress={() => sendFeedback(life)}>
            <TextLabel>{life.name}</TextLabel>
            <TextLabel>{life.phone}</TextLabel>
        </Line>
    ))

    return (
        <Scroll>
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
        </Scroll>
    )
}
