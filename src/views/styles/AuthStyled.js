import styled from 'styled-components/native'
import { MiddleCenterColumn, MiddleCenterRow, CenterColumn } from '../../themes/StyleConstants'

import Colors from '../../themes/Colors'
import Fonts from '../../themes/Fonts'

import IconLogo from '../../assets/icons/logo-shadow.png'
import IconLogoWhite from '../../assets/icons/logo-white.png'
import BgLogin from '../../assets/img/bg-login.jpg'

export const BoxLogo = styled.View`
    ${MiddleCenterColumn}
    justify-content: space-between;
    width: 100%;
    margin-bottom: 100px;
`

export const Logo = styled.Image.attrs({ source: IconLogo })`
    width: 160px;
    height: 160px;
`

export const LogoWhite = styled.Image.attrs({ source: IconLogoWhite })`
    width: 140px;
    height: 140px;
    opacity: 0.9;
`

export const NameChurch = styled.Text`
    width: 60%;
    font-size: 22px;
    line-height: 22px;
    text-align: center;
    color: ${Colors.primary};
    font-family: ${Fonts.semiBold};
    margin: 12px 0px;
`

export const TextGray = styled.Text`
    color: ${Colors.middleGray};
    font-size: 15px;
    font-family: ${Fonts.semiBold};
`

export const Progress = styled.View`
    ${MiddleCenterRow}
    width: 180px;
    height: 6px;
    padding: 2px;
    border-radius: 5px;
    background-color: ${Colors.smoothGray};
`

export const Fill = styled.View`
    height: 100%;
    border-radius: 10px;
    background-color: ${Colors.secondary};
`

export const Background = styled.Image.attrs({ source: BgLogin, resizeMode: 'cover' })`
    position: absolute;
    width: 100%;
    height: 300px;
`

export const Header = styled.View`
    ${CenterColumn}
    width: 100%;
    height: 250px;
`

export const Title = styled.Text`
    color: ${Colors.white};
    font-size: 26px;
    font-family: ${Fonts.bold};
`

export const Box = styled.View`
    ${MiddleCenterColumn}
    width: 90%;
    padding: 10px;
    border-radius: 10px;
    background-color: ${Colors.white};
    elevation: 4;
`