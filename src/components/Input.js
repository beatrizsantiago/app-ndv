import React from 'react'
import styled from 'styled-components/native'

import Colors from '../themes/Colors'
import Fonts from '../themes/Fonts'
import { MiddleCenterRow, CenterRow } from '../themes/StyleConstants'

export default Input = ({ label, icon, outlined, value, onChange, editable, maxLength, placeholder, textAlign }) => {

    const Container = styled.View`
        ${MiddleCenterRow}
        justify-content: space-between;
        width: 100%;
        padding: 5px;
        margin-bottom: 5px;
        border-radius: 4px;
        border-bottom-color: ${Colors.smoothGray};
        border-bottom-width: 1px;
        background-color: lightblue;
    `

    const Label = styled.Text`
        color: ${outlined ? Colors.primary : Colors.secondary};
        font-size: 12px;
        font-family: ${Fonts.semiBold};
        width: 25%;
        padding-right: 5px;
        background-color: pink;
    `

    const InputText = styled.TextInput`
        width: ${label && icon ? 63 : (label ? 75 : (icon ? 88 : 100))}%;
        height: 100%;
        margin: 0px;
        padding: 0px;
        font-size: 16px;
        font-family: ${Fonts.bold};
        color: ${outlined ? Colors.primary : Colors.secondary};
        text-align: ${textAlign ? textAlign : 'left'};
    `

    const Icon = styled.View`
        ${CenterRow}
        width: 12%;
        height: 100%;
        padding-left: 5px;
        background-color: orange;
    `

    return (
        <Container>
            {label ? <Label>{label}</Label> : null}
            <InputText value={value} onChange={onChange} maxLength={maxLength} placeholder={placeholder} editable={editable} />
            {icon ? <Icon>{icon}</Icon> : null}
        </Container>
    )
}
