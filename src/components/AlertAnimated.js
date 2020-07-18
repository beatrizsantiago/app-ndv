import React from 'react'
import styled from 'styled-components/native'
import AwesomeAlert from 'react-native-awesome-alerts'

import Colors from '../themes/Colors'

export default AlertAnimated = ({ show, onConfirmPressed, message, viewCancelButton = false, textCancel = '', onCancelPressed, textConfirm = null, textTitle = null }) => {

    const Alert = styled(AwesomeAlert).attrs({
        title: textTitle ? textTitle : 'Atenção',
        titleStyle: { fontSize: textTitle == ' ' ? 0 : 20 },
        showProgress: false,
        closeOnTouchOutside: false,
        closeOnHardwareBackPress: false,
        showConfirmButton: true,
        confirmText: textConfirm ? textConfirm : 'ok',
        confirmButtonColor: Colors.green,
        confirmButtonStyle: { width: 60, display: 'flex', justifyContent: 'center', alignItems: 'center' },
        confirmButtonTextStyle: { fontSize: 16 },
        showCancelButton: viewCancelButton,
        cancelText: textCancel,
        cancelButtonColor: Colors.red,
        cancelButtonStyle: { width: 60, display: 'flex', justifyContent: 'center', alignItems: 'center' },
        cancelButtonTextStyle: { fontSize: 16 },
        messageStyle: {
            fontSize: 18,
            textAlign: 'center',
        }
    })``

    return (
        <Alert show={show} onConfirmPressed={onConfirmPressed} message={message} onCancelPressed={onCancelPressed} />
    )
}
