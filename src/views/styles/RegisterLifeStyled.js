import styled from 'styled-components/native'

import Colors from '../../themes/Colors'
import Fonts from '../../themes/Fonts'
import { MiddleCenterRow } from '../../themes/StyleConstants'

export const Title = styled.Text`
    color: ${Colors.primary};
    font-size: 20px;
    font-family: ${Fonts.semiBold};
    text-align: center;
    width: 100%;
    margin-bottom: 10px;
`

export const Row = styled.View`
    ${MiddleCenterRow}
    justify-content: space-between;
    width: 100%;
`

export const MiddleRow = styled.View`
    ${MiddleCenterRow}
    justify-content: space-between;
    width: 49%;
`

export const BoxButtons = styled.View`
    ${MiddleCenterRow}
    justify-content: space-around;
    width: 100%;
`
