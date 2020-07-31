import React from 'react'
import styled, { css } from 'styled-components/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { TextInputMask } from 'react-native-masked-text'

import Colors from '../themes/Colors'
import Fonts from '../themes/Fonts'
import { MiddleCenterRow, CenterRow } from '../themes/StyleConstants'

export default Input = ({ label, icon, outlined, rounded, value, onChangeText, editable, maxLength, placeholder, textAlign, secureTextEntry, error, required, keyboardType, masked, typeMask, options, widthContainer, multiline = false }) => {
    return (
        <Container error={error} outlined={outlined} rounded={rounded} widthContainer={widthContainer}>
            {label ?
                <Label outlined={outlined}>{label}{required ? <Label> *</Label> : null}</Label>
                : null}

            {
                masked ?
                    <InputMask value={value} onChangeText={onChangeText} type={typeMask} options={options} label={label} icon={icon} textAlign={textAlign} outlined={outlined} rounded={rounded} maxLength={maxLength} placeholder={placeholder} editable={editable} secureTextEntry={secureTextEntry} keyboardType={keyboardType} />
                    :
                    <InputText value={value} onChangeText={onChangeText} label={label} icon={icon} textAlign={textAlign} outlined={outlined} rounded={rounded} maxLength={maxLength} placeholder={placeholder} editable={editable} secureTextEntry={secureTextEntry} keyboardType={keyboardType} multiline={multiline} />
            }

            {icon ?
                <BoxIcon>{<Icon name={icon} size={30} color={Colors.middleGray} />}</BoxIcon>
                : null}
        </Container>
    )
}

const Container = styled.View`
    ${MiddleCenterRow}
    justify-content: space-between;
    width: ${props => props.widthContainer ? props.widthContainer : 100}%;
    padding: ${props => props.rounded ? 8 : 5}px;
    margin-bottom: 10px;
    border-radius: ${props => props.rounded ? 8 : 4}px; 
    border-bottom-color: ${props => props.error ? Colors.secondary : (props.outlined ? Colors.middleGray : Colors.secondary)};
    border-bottom-width: ${props => props.error ? 2 : (props.rounded ? 0 : 1)}px;
    background-color: ${props => props.outlined ? Colors.iceWhite : (props.rounded ? Colors.white : '#fff2f2')};
`

const Label = styled.Text`
    color: ${props => props.outlined ? Colors.primary : Colors.secondary};
    font-size: 14px;
    font-family: ${Fonts.semiBold};
    width: 30%;
    padding-right: 5px;
`

const PropsInput = css`
    width: ${props => props.label && props.icon ? 58 : (props.label ? 70 : (props.icon ? 88 : 100))}%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    font-size: 16px;
    font-family: ${Fonts.bold};
    color: ${props => props.outlined || props.rounded ? Colors.primary : Colors.secondary};
    text-align: ${props => props.textAlign ? props.textAlign : 'left'};
`

const InputMask = styled(TextInputMask)`
    ${PropsInput}
`

const InputText = styled.TextInput`
    ${PropsInput}
`

const BoxIcon = styled.View`
    ${CenterRow}
    width: 12%;
    height: 100%;
    padding-left: 5px;
`