import React from 'react'
import styled from 'styled-components/native'
import { Picker } from '@react-native-community/picker'

import Colors from '../themes/Colors'
import Fonts from '../themes/Fonts'
import { MiddleCenterRow, MiddleCenterColumn } from '../themes/StyleConstants'

export default Select = ({ datas = [], label, type = 'inline', selectedValue, onValueChange, enabled, error, required }) => {
    return (
        <Container error={error} type={type}>
            <Label type={type}>{label}{required ? <Label> *</Label> : null}</Label>
            <InputSelect selectedValue={selectedValue} onValueChange={onValueChange} enabled={enabled} type={type}>
                {
                    datas.map((data, index) => (
                        <Picker.Item key={index} label={data.label} value={data.value} />
                    ))
                }
            </InputSelect>
        </Container>
    )
}

const Container = styled.View`
    ${props => props.type == 'inline' ? MiddleCenterRow : MiddleCenterColumn}
    justify-content: space-between;
    width: 100%;
    padding: 5px;
    margin-bottom: 10px;
    border-radius: 4px;
    border-bottom-color: ${props => props.error ? Colors.secondary : Colors.middleGray};
    border-bottom-width: ${props => props.error ? 2 : 1}px;
    background-color: ${Colors.iceWhite};
`

const Label = styled.Text`
    color: ${Colors.primary};
    font-size: 14px;
    font-family: ${Fonts.semiBold};
    width: ${props => props.type == 'inline' ? 30 : 100}%;
    padding-right: 5px;
    text-align: ${props => props.type == 'inline' ? 'left' : 'center'};
`

const InputSelect = styled(Picker)`
    width: ${props => props.type == 'inline' ? 75 : 100}%;
    height: 30px;
    margin: 0px;
    padding: 0px;
    font-size: 16px;
    font-family: ${Fonts.bold};
    color: ${Colors.primary};
`