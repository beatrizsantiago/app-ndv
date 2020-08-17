import React from 'react'
import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { TextInputMask } from 'react-native-masked-text'

import Colors from '../themes/Colors'
import Fonts from '../themes/Fonts'
import { MiddleCenterRow, CenterRow, MiddleCenterColumn } from '../themes/StyleConstants'

export default Input = ({ label, icon, outlined, rounded, styleType = 'inline', value, onChangeText, editable, maxLength, placeholder, textAlign, secureTextEntry, error, required, keyboardType, masked, typeMask, options, widthContainer, multiline = false, onBlur, onFocus, pressIcon }) => {
    return (
        <Container error={error} outlined={outlined} rounded={rounded} widthContainer={widthContainer} styleType={styleType}>
            {label ?
                <Label outlined={outlined} styleType={styleType}>{label}{required ? <Label> *</Label> : null}</Label>
                : null}

            {
                masked ?
                    <InputMask value={value} onChangeText={onChangeText} type={typeMask} options={options} label={label} icon={icon} textAlign={textAlign} outlined={outlined} rounded={rounded} maxLength={maxLength} placeholder={placeholder} editable={editable} secureTextEntry={secureTextEntry} keyboardType={keyboardType} styleType={styleType} onBlur={onBlur} onFocus={onFocus} />
                    :
                    <InputText value={value} onChangeText={onChangeText} label={label} icon={icon} textAlign={textAlign} outlined={outlined} rounded={rounded} maxLength={maxLength} placeholder={placeholder} editable={editable} secureTextEntry={secureTextEntry} keyboardType={keyboardType} multiline={multiline} styleType={styleType} onBlur={onBlur} onFocus={onFocus} />
            }

            {icon ?
                <BoxIcon>
                    {
                        icon == 'password' ?
                            <TouchableOpacity onPress={pressIcon}>
                                <Icon name={secureTextEntry == true ? 'eye' : 'eye-off'} size={30} color={Colors.middleGray} />
                            </TouchableOpacity>
                            :
                            <Icon name={icon} size={30} color={Colors.middleGray} />
                    }
                </BoxIcon>
                : null}
        </Container>
    )
}

const Container = styled.View`
    ${props => props.styleType == 'inline' ? MiddleCenterRow : MiddleCenterColumn}
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
    padding-right: 5px;
    width: ${props => props.styleType == 'inline' ? 30 : 100}%;
    text-align: ${props => props.styleType == 'inline' ? 'left' : 'center'};
`

const PropsInput = css`
    width: ${props => props.styleType == 'inline' ? (props.label && props.icon ? 58 : (props.label ? 70 : (props.icon ? 88 : 100))) : 100}%;
    ${props => props.styleType == 'inline' ? 'height: 100%;' : 'height: 28px;'}
    margin: 0px;
    padding: 0px;
    font-size: 16px;
    font-family: ${Fonts.bold}; 
    color: ${props => props.outlined || props.rounded ? Colors.primary : Colors.secondary};
    text-align: ${props => props.textAlign ? props.textAlign : (props.styleType != 'inline' ? 'center' : 'left')};
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