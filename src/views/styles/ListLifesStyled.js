import styled from 'styled-components/native'

import Colors from '../../themes/Colors'
import Fonts from '../../themes/Fonts'
import { CenterColumn, MiddleCenterColumn, MiddleCenterRow } from '../../themes/StyleConstants'

export const Background = styled.View`
    ${CenterColumn}
    position: absolute;
    top: 0px;
    width: 100%;
    height: 120px;
    background-color: ${Colors.secondary};
    /* border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px; */
`

export const Header = styled.View`
    ${MiddleCenterColumn}
    justify-content: flex-end;
    width: 100%;
    height: 170px;
    margin-bottom: 5px;
    border: solid 1px #000;
`

export const Box = styled.View`
    width: 85%;
    height: 100px;
    border-radius: 10px;
    background-color: ${Colors.backgroundGray};
`

export const Line = styled.TouchableOpacity`
    ${MiddleCenterRow}
    width: 100%;
    padding: 5px;
    margin: 5px 0px;
    border: solid 1px pink;
`

export const BoxIcon = styled.View`
    ${CenterColumn}
    width: 50px;
    height: 50px;
`

export const LabelTransparent = styled.View`
    flex: 1;
    padding: 5px;
    border-radius: 5px;
    background-color: ${props => props.index % 2 == 0 ? Colors.redTransparent1 : Colors.blackTransparent4};
`

export const TextLabel = styled.Text`
    color: ${Colors.primary};
    font-size: 16px;
    font-family: ${Fonts.semiBold};
`