import styled from 'styled-components/native'

import Colors from '../../themes/Colors'
import Fonts from '../../themes/Fonts'
import { CenterColumn, MiddleCenterColumn, MiddleCenterRow } from '../../themes/StyleConstants'

export const Background = styled.View`
    ${CenterColumn}
    position: absolute;
    top: 0px;
    width: 100%;
    height: 146px;
    background-color: ${Colors.secondary};
`

export const Header = styled.View`
    ${MiddleCenterColumn}
    justify-content: flex-end;
    width: 100%;
    height: 108px;
    margin-bottom: 5px;
`

export const Box = styled.View`
    ${MiddleCenterRow}
    justify-content: space-around;
    width: 96%;
    padding: 10px;
    border-radius: 10px;
    background-color: ${Colors.blackTransparent6};
`

export const SamllBox = styled.View`
    ${MiddleCenterRow}
    width: 49%;
`

export const TextWhite = styled.Text`
    color: ${Colors.white};
    font-size: 16px;
    font-family: ${Fonts.bold};
    margin-left: 5px;
`

export const Line = styled.TouchableOpacity`
    display: flex;
    flex-direction: column;
    width: 96%;
    padding: 5px 10px;
    margin: 5px;
    border-radius: 5px;
    border-left-width: 5px;
    border-left-color: ${Colors.blackTransparent5};
    background-color: ${Colors.backgroundGray};
`

export const TextLabel = styled.Text`
    color: ${Colors.primary};
    font-size: 16px;
    font-family: ${Fonts.semiBold};
`