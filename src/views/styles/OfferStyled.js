import styled from 'styled-components/native'
import { CenterColumn, MiddleCenterColumn, MiddleCenterRow } from '../../themes/StyleConstants'

import Colors from '../../themes/Colors'
import Fonts from '../../themes/Fonts'

import ImgBill from '../../assets/icons/icon_bill.png'
import ImgCredit from '../../assets/icons/icon_credit.png'

export const Label = styled.Text`
    font-size: 18px;
    color: ${Colors.primary};
    font-family: ${Fonts.semiBold};
    ${props => props.type == 1 ? 'margin: 40px 0px 15px 0px;' : 'margin: 15px 0px;'}
`

export const Box = styled.TouchableOpacity`
    ${CenterColumn}
    width: 100%;
    height: 120px;
`

export const LargeBox = styled.TouchableOpacity`
    ${MiddleCenterRow}
    justify-content: space-between;
    width: 85%;
    height: 70px;
    padding: 15px;
    border-radius: 5px;
    background-color: ${Colors.iceWhite};
`

export const Circle = styled.View`
    ${CenterColumn}
    width: 110px;
    height: 110px;
    border-radius: 60px;
    background-color: ${Colors.white};
    elevation: 4;
`

export const Icon = styled.Image.attrs(props => ({ source: props.type == 1 ? ImgCredit : ImgBill }))`
    width: 125px;
    height: 125px;
`

export const Title = styled.Text`
    font-size: 18px;
    color: ${Colors.primary};
    font-family: ${Fonts.bold};
`

export const LabelRed = styled.Text`
    font-size: 18px;
    color: ${Colors.secondary};
    font-family: ${Fonts.semiBold};
    margin: 15px 0px;
`

export const BoxTransfer = styled.View`
    width: 85%;
    padding: 10px;
    border-radius: 10px;
    elevation: 4;
    background-color: ${Colors.white};
    margin-bottom: 25px;
`