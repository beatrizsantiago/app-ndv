import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/AntDesign'

import IntegrationService from '../services/IntegrationService'

import Loading from '../components/Loading'

import { Scroll } from './styles/MainStyled'
import { Background, Header, Box, Line, BoxIcon, LabelTransparent, TextLabel } from './styles/ListLifesStyled'

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
            <BoxIcon>
                <Icon name="doubleright" size={25} color={Colors.secondary} />
            </BoxIcon>
            <LabelTransparent index={index}>
                <TextLabel>{life.name}</TextLabel>
                <TextLabel>{life.phone}</TextLabel>
            </LabelTransparent>
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

                            </Box>
                        </Header>
                        {showLifes()}
                    </>
            }
        </Scroll>
    )
}
