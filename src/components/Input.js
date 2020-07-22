import React from 'react'
import styled, {css} from 'styled-components/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { TextInputMask } from 'react-native-masked-text'

import Colors from '../themes/Colors'
import Fonts from '../themes/Fonts'
import { MiddleCenterRow, CenterRow } from '../themes/StyleConstants'

export default Input = ({ label, icon, outlined, value, onChangeText, editable, maxLength, placeholder, textAlign, secureTextEntry, error, required, keyboardType, masked, typeMask, options }) => {
    return (
        <Container error={error}>
            {label ?
                <Label outlined={outlined}>{label}{required ? <Label> *</Label> : null}</Label>
                : null}

            {
                masked ?
                    <InputMask value={value} onChangeText={onChangeText} type={typeMask} options={options} label={label} icon={icon} textAlign={textAlign} outlined={outlined} maxLength={maxLength} placeholder={placeholder} editable={editable} secureTextEntry={secureTextEntry} keyboardType={keyboardType} />
                    :
                    <InputText value={value} onChangeText={onChangeText} label={label} icon={icon} textAlign={textAlign} outlined={outlined} maxLength={maxLength} placeholder={placeholder} editable={editable} secureTextEntry={secureTextEntry} keyboardType={keyboardType} />
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
    width: 100%;
    padding: 5px;
    margin-bottom: 10px;
    border-radius: 4px;
    border-bottom-color: ${props => props.error ? Colors.secondary : Colors.middleGray};
    border-bottom-width: ${props => props.error ? 2 : 1}px;
    background-color: ${Colors.iceWhite};
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
    color: ${props => props.outlined ? Colors.primary : Colors.secondary};
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