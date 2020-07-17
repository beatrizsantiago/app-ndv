import React from 'react'
import { ActivityIndicator } from 'react-native'
import styled from 'styled-components/native'

import Colors from '../themes/Colors'
import Fonts from '../themes/Fonts'
import { CenterRow } from '../themes/StyleConstants'

export default Button = ({ width, height, sizeFont, onPress, disabled, loading, title, outlined, margin }) => {

    const Button = styled.TouchableOpacity`
        ${CenterRow}
        width: ${width || '65'}%; 
        height: ${height || '50'}px;
        margin: ${margin || '5'}px;
        border-radius: ${height || 30}px;
        ${outlined ? `border: solid 1.6px ${Colors.secondary}` : ''};
        background-color: ${outlined ? Colors.white : Colors.secondary};
        opacity: ${disabled ? 0.7 : 1};
    `

    const TextButton = styled.Text.attrs({ allowFontScaling: false })`
        color: ${outlined ? Colors.secondary : Colors.white};
        font-size: ${sizeFont || 18}px;
        font-family: ${Fonts.semiBold};
        line-height: ${height || '50'}px;
    `

    return (
        <Button onPress={onPress} disabled={disabled}>
            {loading == true ? <ActivityIndicator size="small" color={outlined ? Colors.secondary : Colors.white} style={{ marginRight: 5 }} /> : null}
            <TextButton>{title || ''}</TextButton>
        </Button>
    )
}
