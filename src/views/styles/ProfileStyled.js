import styled from 'styled-components/native'

import Colors from '../../themes/Colors'
import Fonts from '../../themes/Fonts'
import { MiddleCenterColumn, CenterColumn, MiddleCenterRow } from '../../themes/StyleConstants'

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
    ${CenterColumn}
    width: 150px;
    height: 150px;
    border-radius: 100px;
    background-color: ${Colors.white};
    elevation: 4;
`

export const ImageProfile = styled.Image.attrs({ source: { uri: 'https://pm1.narvii.com/6591/13fcc6772236a672a768b9a8433534c13784d88e_hq.jpg' }, resizeMode: 'cover' })`
    width: 135px;
    height: 135px;
    border-radius: 80px;
`

export const TouchCircle = styled.TouchableOpacity`
    ${CenterColumn}
    position: absolute;
    right: -5px;
    bottom: 10px;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background-color: ${Colors.blackTransparent8};
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

export const TitleSection = styled.Text`
    color: ${Colors.secondary};
    font-size: 16px;
    font-family: ${Fonts.semiBold};
    width: 100%;
    margin: 8px 0px;
`

export const Box = styled.View`
    ${MiddleCenterColumn}
    width: 100%;
    padding: 0px 10px;
`

export const BoxButtons = styled.View`
    ${MiddleCenterRow}
    justify-content: space-around;
    width: 100%;
`
