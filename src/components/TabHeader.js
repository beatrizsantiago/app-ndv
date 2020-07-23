import React from 'react'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/Feather'
import { connect } from 'react-redux'

import Colors from '../themes/Colors'
import Fonts from '../themes/Fonts'

import { MiddleCenterRow } from '../themes/StyleConstants'

const TabHeader = ({ currentNavigation, color, ...props }) => {

    const getName = () => {
        if (currentNavigation == "Home") {
            return "Home"
            
        } else if (currentNavigation == "Integration") {
            return "Integração"

        } else if (currentNavigation == "Profile") {
            return "Meu Perfil"
        }
    }

    return (
        <Container color={color}>
            <Touch onPress={() => props.navigation.toggleDrawer()}>
                <Icon name="menu" color={Colors.white} size={32} />
            </Touch>
            <Title>{getName()}</Title>
        </Container>
    )
}

const mapStateToProps = state => ({
    currentNavigation: state.navigation.currentNavigation
})

export default connect(mapStateToProps)(TabHeader)

const Container = styled.View`
    ${MiddleCenterRow}
    justify-content: space-between;
    width: 100%;
    padding: 10px;
    background-color: ${props => props.color ? props.color : 'transparent'};
`

const Touch = styled.TouchableOpacity``

const Title = styled.Text`
    color: ${Colors.white};
    font-family: ${Fonts.bold};
    font-size: 16px;
    margin-right: 4px;
`
