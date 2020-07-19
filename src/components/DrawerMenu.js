import React from 'react'
import { Linking, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons'
import IconAnt from 'react-native-vector-icons/AntDesign'

import Colors from '../themes/Colors'
import Fonts from '../themes/Fonts'
import { CenterColumn, MiddleCenterRow } from '../themes/StyleConstants'

import BgDrawer from '../assets/img/bg-drawer-noise.jpg'

export default DrawerMenu = (props) => {
    // console.warn(props.state);

    const openYoutube = () => {
        Linking.canOpenURL('vnd.youtube://user/channel/UCSsJY4uobyUO33vs3nc7xLQ').then(supported => {
            if (supported) {
                return Linking.openURL('vnd.youtube://user/channel/UCSsJY4uobyUO33vs3nc7xLQ')
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
        Linking.canOpenURL('fb://page/ndvfortaleza').then(supported => {
            if (supported) {
                return Linking.openURL('fb://page/ndvfortaleza')
            } else {
                return Linking.openURL('https://www.facebook.com/ndvfortaleza/')
            }
        })
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
                    <Item>
                        <IconDrawer name="home" />
                        <Label>Home</Label>
                    </Item>
                    <Item>
                        <IconDrawer name="user" />
                        <Label>Integração</Label>
                    </Item>
                    <Item>
                        <IconDrawer name="search1" />
                        <Label>Pesquisar Cap</Label>
                    </Item>
                    <Item>
                        <IconDrawer name="setting" />
                        <Label>Meu perfil</Label>
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
                <Box></Box>
            </Background>
        </Container>
    )
}

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
    width: 100%;
    padding: 5px;
    margin: 5px;
`

const IconDrawer = styled(IconAnt).attrs(props => ({
    name: props.name,
    color: Colors.white,
    size: 28
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

const Box = styled.View`
    position: absolute;
    width: 50px;
    height: 50px;
    right: -50px;
    background-color: yellow;
`