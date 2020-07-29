import styled from 'styled-components/native'
import { MiddleCenterColumn, CenterRow } from '../../themes/StyleConstants'

import Colors from '../../themes/Colors'

export const BoxGray = styled.View`
    ${MiddleCenterColumn}
    width: 100%;
    flex: 1;
    padding: 12px;
    background-color: ${Colors.backgroundGray};
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`

export const Row = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`

export const MiddleBox = styled.View`
    width: ${props => props.width}%;
`

export const ButtonSearch = styled.TouchableOpacity`
    ${CenterRow}
    width: 12.5%;
    height: 44px;
    border-radius: 8px;
    background-color: ${Colors.secondary};
`