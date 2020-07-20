import React, { useState } from 'react'
import { Linking, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons'
import IconAnt from 'react-native-vector-icons/AntDesign'
import { connect } from 'react-redux'

import { setCurrentNavigation } from '../redux/navigation/navigation.actions'

import UserService from '../services/UserService'

import AlertAnimated from './AlertAnimated'

import Colors from '../themes/Colors'
import Fonts from '../themes/Fonts'
import { CenterColumn, MiddleCenterRow } from '../themes/StyleConstants'

import BgDrawer from '../assets/img/bg-drawer-noise.jpg'

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
        Linking.canOpenURL('fb://page/139996232323232553360774/').then(supported => {
            if (supported) {
                return Linking.openURL('fb://page/139996232323232553360774/')
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
            <Background>
                <Header>
                    <BoxProfile>
                        <Profile />
                    </BoxProfile>
                    <User>Beatriz Santiago</User>
                </Header>
                <Body>
                    <Item type={getType('Home')} onPress={() => navigationScreen('Home')}>
                        <IconDrawer name="home" />
                        <Label>Home</Label>
                    </Item>
                    <Item type={getType('Integration')} onPress={() => navigationScreen('Integration')}>
                        <IconDrawer name="team" />
                        <Label>Integração</Label>
                    </Item>
                    <Item onPress={() => setShowAlert(true)}>
                        <IconDrawer name="logout" />
                        <Label>Sair</Label>
                    </Item>
                </Body>
                <Footer>
                    <TouchableOpacity onPress={() => openYoutube()}>
                        <Icon name="youtube" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => openInstagram()}>
                        <Icon name="instagram" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => openFacebook()}>
                        <Icon name="facebook" />
                    </TouchableOpacity>
                </Footer>
                {/* <Box>
                    <IconMaterial name="window-close" color={Colors.primary} size={35} />
                </Box> */}
            </Background>

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
    width: 100%;
    flex: 1;
`

const Background = styled.ImageBackground.attrs({ source: BgDrawer, resizeMode: 'cover', blurRadius: 1.2 })`
    width: 100%;
    flex: 1;
`

const Header = styled.View`
    ${CenterColumn}
    width: 100%;
    height: 160px;
`

const BoxProfile = styled.View`
    ${CenterColumn}
    width: 100px;
    height: 100px;
    margin-bottom: 8px;
    border-radius: 15px;
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
    border-radius: 10px;
`

const Body = styled.ScrollView`
    width: 100%;
    flex: 1;
`

const Item = styled.TouchableOpacity`
    ${MiddleCenterRow}
    width: 96.5%;
    padding: 8px;
    margin: 5px;
    border-radius: 5px;
    background-color: ${props => props.type == 1 ? Colors.blackTransparent5 : 'transparent'};
`

const IconDrawer = styled(IconAnt).attrs(props => ({
    name: props.name,
    color: Colors.white,
    size: 26
}))``

const Label = styled.Text`
    color: ${Colors.white};
    font-size: 16px;
    font-family: ${Fonts.bold};
    margin-left: 5px;
`

const Footer = styled.View`
    ${MiddleCenterRow}
    justify-content: space-around;
    width: 100%;
    height: 60px;
`

const Icon = styled(IconMaterial).attrs(props => ({
    name: props.name,
    color: Colors.white,
    size: 35
}))``

const Box = styled.TouchableOpacity`
    ${CenterColumn}
    position: absolute;
    width: 50px;
    height: 50px;
    top: 0px;
    right: -50px;
    background-color: yellow;
`