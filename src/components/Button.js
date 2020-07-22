import React from 'react'
import { ActivityIndicator } from 'react-native'
import styled from 'styled-components/native'

import Colors from '../themes/Colors'
import Fonts from '../themes/Fonts'
import { CenterRow } from '../themes/StyleConstants'

export default Button = ({ width, height, sizeFont, onPress, disabled, loading, title, outlined, margin }) => {
    return (
        <ButtonContainer onPress={onPress} disabled={disabled} width={width} height={height} margin={margin} outlined={outlined}>
            {
                loading == true ?
                    <ActivityIndicator size="small" color={outlined ? Colors.secondary : Colors.white} style={{ marginRight: 5 }} />
                    : null
            }
            <TextButton sizeFont={sizeFont} height={height} outlined={outlined}>{title || ''}</TextButton>
        </ButtonContainer>
    )
}

const ButtonContainer = styled.TouchableOpacity`
    ${CenterRow}
    width: ${props => props.width || '65'}%; 
    height: ${props => props.height || '50'}px;
    margin: ${props => props.margin || '5'}px;
    border-radius: ${props => props.height || 30}px;
    ${props => props.outlined ? `border: solid 1.6px ${Colors.secondary}` : ''};
    background-color: ${props => props.outlined ? Colors.white : Colors.secondary};
    opacity: ${props => props.disabled ? 0.7 : 1};
`

const TextButton = styled.Text.attrs({ allowFontScaling: false })`
    color: ${props => props.outlined ? Colors.secondary : Colors.white};
    font-size: ${props => props.sizeFont || 18}px;
    font-family: ${Fonts.semiBold};
    line-height: ${props => props.height || '50'}px;
`

