import React from 'react'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Colors from '../themes/Colors'
import Fonts from '../themes/Fonts'
import { MiddleCenterRow, CenterRow } from '../themes/StyleConstants'

export default Input = ({ label, icon, outlined, value, onChangeText, editable, maxLength, placeholder, textAlign, secureTextEntry, error }) => {

    const Container = styled.View`
        ${MiddleCenterRow}
        justify-content: space-between;
        width: 100%;
        padding: 5px;
        margin-bottom: 10px;
        border-radius: 4px;
        border-bottom-color: ${error ? Colors.secondary : Colors.middleGray};
        border-bottom-width: ${error ? 2 : 1}px;
        background-color: ${Colors.iceWhite};
    `

    const Label = styled.Text`
        color: ${outlined ? Colors.primary : Colors.secondary};
        font-size: 14px;
        font-family: ${Fonts.semiBold};
        width: 30%;
        padding-right: 5px;
    `

    const InputText = styled.TextInput`
        width: ${label && icon ? 58 : (label ? 70 : (icon ? 88 : 100))}%;
        height: 100%;
        margin: 0px;
        padding: 0px;
        font-size: 16px;
        font-family: ${Fonts.bold};
        color: ${outlined ? Colors.primary : Colors.secondary};
        text-align: ${textAlign ? textAlign : 'left'};
    `

    const BoxIcon = styled.View`
        ${CenterRow}
        width: 12%;
        height: 100%;
        padding-left: 5px;
    `

    return (
        <Container>
            {label ? <Label>{label}</Label> : null}
            <InputText value={value} onChangeText={onChangeText} maxLength={maxLength} placeholder={placeholder} editable={editable} secureTextEntry={secureTextEntry} />
            {icon ? <BoxIcon>{<Icon name={icon} size={30} color={Colors.middleGray} />}</BoxIcon> : null}
        </Container>
    )
}
