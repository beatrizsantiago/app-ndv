import React from 'react'
import { ActivityIndicator } from 'react-native'
import styled from 'styled-components/native'

import Colors from '../themes/Colors'

import { CenterColumn } from '../themes/StyleConstants'

export default Loading = () => {
    return (
        <Container>
            <ActivityIndicator color={Colors.secondary} size="large" />
        </Container>
    )
}

const Container = styled.View`
    ${CenterColumn}
    width: 100%;
    height: 250px;
`