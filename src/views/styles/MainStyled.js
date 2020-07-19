import styled from 'styled-components/native'
import { MiddleCenterColumn, CenterColumn } from '../../themes/StyleConstants'

import Colors from '../../themes/Colors'

export const Container = styled.View`
    ${MiddleCenterColumn}
    flex: 1;
    background-color: ${Colors.white};
`

export const ContainerCenter = styled.View`
    ${CenterColumn}
    flex: 1;
    background-color: ${Colors.white};
`

export const Scroll = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {
        flexDirection: 'column',
        alignItems: 'center',
    }
})`
    width: 100%;
    background-color: ${Colors.white};
`
