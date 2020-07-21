import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import IntegrationService from '../services/IntegrationService'

import Loading from '../components/Loading'

import { Scroll } from './styles/MainStyled'
import { Background, Header, Box, SamllBox, TextRed, Line, TextLabel, Circle } from './styles/ListLifesStyled'

import Colors from '../themes/Colors'

export default ListLifes = ({ navigation }) => {

    const [listLifes, setListLifes] = useState([])
    const [loading, setLoading] = useState(false)

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

    const showLifes = () => listLifes.map((life, index) => (
        <Line key={index}>
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
                            <Box>
                                <SamllBox>
                                    <Circle>
                                        <Icon name="clipboard-account-outline" color={Colors.white} size={35} />
                                    </Circle>
                                    <TextRed>5 Vidas</TextRed>
                                </SamllBox>
                                <SamllBox>
                                    <Circle>
                                        <Icon name="ballot-recount-outline" color={Colors.white} size={35} />
                                    </Circle>
                                    <TextRed>15 Feedbacks</TextRed>
                                </SamllBox>
                            </Box>
                        </Header>
                        {showLifes()}
                    </>
            }
        </Scroll>
    )
}
