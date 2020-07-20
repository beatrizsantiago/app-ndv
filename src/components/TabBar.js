import React from 'react'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import IconAnt from 'react-native-vector-icons/AntDesign'

import Colors from '../themes/Colors'
import Fonts from '../themes/Fonts'
import { CenterRow, CenterColumn } from '../themes/StyleConstants'

export default TabBar = ({ state, descriptors, navigation }) => {

    return (
        <Container>
            {
                state.routes.map((route, index) => {
                    const { options } = descriptors[route.key]
                    const isFocused = state.index === index

                    const onPress = () => {
                        if (!isFocused) {
                            navigation.navigate(route.name);
                        }
                    }

                    return (
                        <Tab key={index} type={index} onPress={() => onPress()}>
                            {
                                route.name == "ListLifes" ?
                                    <Icon name="format-list-text" size={25} color={isFocused ? Colors.secondary : Colors.lightGray} />
                                    :
                                    <IconAnt name="addusergroup" size={25} color={isFocused ? Colors.secondary : Colors.lightGray} />
                            }
                            <Title isFocused={isFocused}> {options.title}</Title>
                        </Tab>
                    )
                })
            }
        </Container>
    )
}

const Container = styled.View`
    ${CenterRow}
    width: 100%;
    height: 70px;
    background-color: ${Colors.primary};
`

const Tab = styled.TouchableOpacity`
    ${CenterColumn}
    width: 50%;
    border-left-width: ${props => props.type == 1 ? 1 : 0}px;
    border-left-color: ${Colors.white};
`

const Title = styled.Text`
    font-family: ${Fonts.semiBold};
    color: ${props => props.isFocused ? Colors.secondary : Colors.lightGray};
    font-size: 14px;
`