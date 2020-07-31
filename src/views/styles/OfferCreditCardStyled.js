import styled, { css } from 'styled-components/native'

import Colors from '../../themes/Colors'
import Fonts from '../../themes/Fonts'
import { MiddleCenterColumn, MiddleCenterRow } from '../../themes/StyleConstants'

export const Header = styled.View`
    ${MiddleCenterColumn}
    width: 100%;
    height: 300px;
`

export const HalfCircle = styled.View`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 70%;
    height: 95%;
    border-bottom-right-radius: 500px;
    background-color: ${Colors.primary};
`

export const ViewCards = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`

const PropsCards = css`
    display: flex;
    align-items: center;
    width: 290px;
    height: 170px;
    border-radius: 6px;
    margin-top: 20px;
    background-color: ${Colors.secondaryTransparent8};
`

export const CardFront = styled.View`
    ${PropsCards}
    padding: 5px;
    z-index: 100;
`

export const CardBack = styled.View`
    ${PropsCards}
    position: absolute;
    top: 0px;
    z-index: 1;
`

export const CardNumber = styled.TextInput.attrs({
    editable: false,
    placeholder: '**** **** **** ****',
    placeholderTextColor: Colors.white,
})`
    width: 100%;
    color: ${Colors.white};
    font-size: 20px;
    font-family: ${Fonts.bold};
    text-align: center;
    margin-top: 40px;
`

export const RowCard = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 70px;
`

export const CardName = styled.TextInput.attrs({ editable: false, multiline: true })`
    width: 75%;
    color: ${Colors.white};
    font-size: 15px;
    font-family: ${Fonts.bold};
    text-align: center;
`

export const ColumnCard = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25%;
`

export const CardLabel = styled.Text.attrs({ allowFontScaling: false })`
    color: ${Colors.white};
    font-size: 10px;
    font-family: ${Fonts.bold};
    text-transform: uppercase;
`

export const CardValidity = styled.TextInput.attrs({
    editable: false,
    placeholder: '**/**',
    placeholderTextColor: Colors.white,
})`
    width: 100%;
    padding: 0px;
    color: ${Colors.white};
    font-size: 18px;
    font-family: ${Fonts.bold};
    text-align: center;
`

export const LineBlack = styled.View`
    position: relative;
    width: 100%;
    height: 50px;
    margin-top: 30px;
    background-color: ${Colors.black};
`

export const CardCode = styled.TextInput.attrs({
    editable: false,
    placeholder: '***',
    placeholderTextColor: Colors.black,
})`
    width: 18%;
    height: 35px;
    margin: 6px 6px 0px 0px;
    padding: 0px;
    color: ${Colors.black};
    font-size: 18px;
    font-family: ${Fonts.bold};
    text-align: center;
    background-color: ${Colors.white};
`

export const Box = styled.View`
    width: 90%;
    padding: 10px;
    border-radius: 10px;
    background-color: ${Colors.white};
    margin-bottom: 25px;
    elevation: 4;
`

export const Row = styled.View`
    ${MiddleCenterRow}
    justify-content: space-between;
    width: 100%;
`
