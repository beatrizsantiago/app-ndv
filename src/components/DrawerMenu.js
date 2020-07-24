import React, { useState } from 'react'
import { Linking, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { connect } from 'react-redux'

import { setCurrentNavigation } from '../redux/navigation/navigation.actions'

import UserService from '../services/UserService'

import AlertAnimated from './AlertAnimated'

import Colors from '../themes/Colors'
import Fonts from '../themes/Fonts'
import { CenterColumn, MiddleCenterRow, MiddleCenterColumn } from '../themes/StyleConstants'

import ImgHome from '../assets/icons/icon_home.png'
import ImgIntegration from '../assets/icons/icon_integration.png'
import ImgProfile from '../assets/icons/icon_profile.png'
import ImgOut from '../assets/icons/icon_out.png'
import ImgYoutube from '../assets/icons/icon_youtube.png'
import ImgInsta from '../assets/icons/icon_insta.png'
import ImgFace from '../assets/icons/icon_face.png'

const DrawerMenu = ({ currentNavigation, setCurrentNavigation, ...props }) => {

    const [showAlert, setShowAlert] = useState(false)

    const openYoutube = () => {
        Linking.canOpenURL('youtube://channel/UCSsJY4uobyUO33vs3nc7xLQ').then(supported => {
            if (supported) {
                return Linking.openURL('youtube://channel/UCSsJY4uobyUO33vs3nc7xLQ')
            } else {
                return Linking.openURL('https://www.youtube.com/channel/UCSsJY4uobyUO33vs3nc7xLQ')
            }
        })
    }

    const openInstagram = () => {
        Linking.canOpenURL('instagram://user?username=ndvfortaleza').then(supported => {
            if (supported) {
                return Linking.openURL('instagram://user?username=ndvfortaleza')
            } else {
                return Linking.openURL('https://www.instagram.com/ndvfortaleza/')
            }
        })
    }

    const openFacebook = () => {
        Linking.canOpenURL('fb://pages/ndvfortaleza/').then(supported => {
            if (supported) {
                return Linking.openURL('fb://pages/ndvfortaleza/')
            } else {
                return Linking.openURL('https://www.facebook.com/ndvfortaleza/')
            }
        })
    }

    const logoff = () => {
        UserService.Logout()
            .then(() => {
                setShowAlert(false)
                props.navigation.reset({ routes: [{ name: 'Login' }] })
            })
    }

    const getType = route => {
        if (route === currentNavigation) {
            return 1
        } else {
            return 0
        }
    }

    const navigationScreen = routeName => {
        setCurrentNavigation(routeName)
        props.navigation.navigate(routeName)
    }

    return (
        <Container>
            <Header>
                <BoxProfile>
                    <Profile />
                </BoxProfile>
                <User>Beatriz Santiago</User>
            </Header>
            <Body>
                <Item onPress={() => navigationScreen('Home')}>
                    <IconImage source={ImgHome} />
                    <Label type={getType('Home')}>Home</Label>
                </Item>
                <Item onPress={() => navigationScreen('Integration')}>
                    <IconImage source={ImgIntegration} />
                    <Label type={getType('Integration')}>Integração</Label>
                </Item>
                <Item onPress={() => navigationScreen('Profile')}>
                    <IconImage source={ImgProfile} />
                    <Label type={getType('Profile')}>Meu Perfil</Label>
                </Item>
                <Item onPress={() => setShowAlert(true)}>
                    <IconImage source={ImgOut} />
                    <Label>Sair</Label>
                </Item>
            </Body>
            <Line />
            <Footer>
                <TouchableOpacity onPress={() => openYoutube()}>
                    <IconTube />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => openInstagram()}>
                    <IconInsta />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => openFacebook()}>
                    <IconFace />
                </TouchableOpacity>
            </Footer>
            <AlertAnimated show={showAlert} onConfirmPressed={() => logoff()} message="Realmente deseja sair do aplicativo?" onCancelPressed={() => setShowAlert(false)} viewCancelButton={true} textCancel="Não" textConfirm="Sim" />
        </Container>
    )
}

const mapStateToProps = state => ({
    currentNavigation: state.navigation.currentNavigation
})
const mapDispatchToProps = dispatch => ({
    setCurrentNavigation: navigation => dispatch(setCurrentNavigation(navigation))
})

export default connect(mapStateToProps, mapDispatchToProps)(DrawerMenu)

const Container = styled.View`
    ${MiddleCenterColumn}
    width: 100%;
    flex: 1;
`

const Header = styled.View`
    ${CenterColumn}
    width: 100%;
    height: 160px;
    background-color: ${Colors.primary};
`

const BoxProfile = styled.View`
    ${CenterColumn}
    width: 100px;
    height: 100px;
    margin-bottom: 8px;
    border-radius: 10px;
    background-color: ${Colors.white};
`

const User = styled.Text`
    color: ${Colors.white};
    font-size: 17px;
    font-family: ${Fonts.bold};
`

const Profile = styled.Image.attrs({ source: { uri: 'https://pm1.narvii.com/6591/13fcc6772236a672a768b9a8433534c13784d88e_hq.jpg' }, resizeMode: 'cover' })`
    width: 90px;
    height: 90px;
    border-radius: 5px;
`

const Body = styled.ScrollView`
    width: 100%;
    flex: 1;
`

const Item = styled.TouchableOpacity`
    ${MiddleCenterRow}
    width: 100%;
    padding: 15px;
`

const IconImage = styled.Image`
    width: 30px;
    height: 30px;
`

const IconTube = styled.Image.attrs({ source: ImgYoutube })`
    width: 38px;
    height: 38px;
`

const IconInsta = styled.Image.attrs({ source: ImgInsta })`
    width: 32px;
    height: 32px;
`

const IconFace = styled.Image.attrs({ source: ImgFace })`
    width: 36px;
    height: 36px;
`

const Label = styled.Text`
    color: ${props => props.type == 1 ? Colors.secondary : Colors.primary};
    font-size: 16px;
    font-family: ${Fonts.bold};
    margin-left: 15px;
`

const Line = styled.View`
    width: 68%;
    height: 0.2px;
    background-color: ${Colors.primary};
`

const Footer = styled.View`
    ${MiddleCenterRow}
    justify-content: space-around;
    width: 100%;
    height: 60px;
`
