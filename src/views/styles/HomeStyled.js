import styled from 'styled-components/native'
import { MiddleCenterColumn } from '../../themes/StyleConstants'

import Colors from '../../themes/Colors'
import Fonts from '../../themes/Fonts'


export const Line = styled.View`
    width: 80%;
    height: 1px;
    background-color: ${Colors.smoothGray};
`

export const Title = styled.Text`
    width: 95%;
    font-size: 16px;
    color: ${Colors.secondary};
    font-family: ${Fonts.semiBold};
    margin: 10px 0px 5px 0px;
`

export const Card = styled.TouchableOpacity`
    ${MiddleCenterColumn}
    width: 95%;
    height: 170px;
    border-radius: 10px;
    background-color: ${Colors.backgroundGray};
`

export const Banner = styled.Image.attrs({ resizeMode: 'cover' })`
    width: 100%;
    height: 70%;
    margin-bottom: 5px;
`

export const TextCard = styled.Text`
    line-height: 20px;
    font-size: ${props => props.type == 1 ? 14 : 18}px;
    color: ${props => props.type == 1 ? Colors.middleGray : Colors.primary};
    font-family: ${Fonts.bold};
`
