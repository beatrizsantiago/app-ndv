import styled from 'styled-components/native'

import Colors from '../../themes/Colors'
import Fonts from '../../themes/Fonts'
import { MiddleCenterColumn, CenterColumn } from '../../themes/StyleConstants'

export const Background = styled.View`
    position: absolute;
    top: 0px;
    width: 100%;
    height: 180px;
    border-bottom-left-radius: 160px;
    border-bottom-right-radius: 160px;
    background-color: ${Colors.secondary};
`

export const Header = styled.View`
    ${MiddleCenterColumn}
    justify-content: space-between;
    width: 100%;
    height: 240px;
`

export const Circle = styled.View`
    width: 150px;
    height: 150px;
    border-radius: 100px;
    background-color: ${Colors.white};
    elevation: 4;
`

export const LargeBox = styled.View`
    ${CenterColumn}
    width: 100%;
    padding: 12px;
`

export const Name = styled.Text`
    color: ${Colors.primary};
    font-size: 20px;
    font-family: ${Fonts.bold};
`

export const Box = styled.View`
    ${MiddleCenterColumn}
    width: 100%;
    padding: 0px 10px;
`
