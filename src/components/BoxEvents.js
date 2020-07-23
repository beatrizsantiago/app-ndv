import React from 'react'
import styled from 'styled-components/native'

import Colors from '../themes/Colors'
import Fonts from '../themes/Fonts'

import { MiddleCenterColumn, MiddleCenterRow, CenterColumn } from '../themes/StyleConstants'

export default BoxEvents = ({ marginWidth }) => {

    const calculateMargin = () => {
        let totalMargin = marginWidth - 300
        let widthMargin = totalMargin / 2
        return widthMargin
    }

    return (
        <Container>
            <TextBlack>Julho</TextBlack>
            <LargeBox>
                <BarDate>
                    <DayGray>Seg</DayGray>
                    <BoxDate>
                        <DayBlack>23</DayBlack>
                    </BoxDate>
                </BarDate>
                <BarDate>
                    <DayGray>Ter</DayGray>
                    <BoxDate>
                        <DayBlack>23</DayBlack>
                    </BoxDate>
                </BarDate>
                <BarDate>
                    <DayGray>Qua</DayGray>
                    <BoxDate>
                        <DayBlack>23</DayBlack>
                    </BoxDate>
                </BarDate>
                <BarDate>
                    <DayGray>Qui</DayGray>
                    <BoxDate type={1}>
                        <DayBlack type={1}>23</DayBlack>
                        <DayBlack type={1}>Hoje</DayBlack>
                    </BoxDate>
                </BarDate>
                <BarDate>
                    <DayGray>Sex</DayGray>
                    <BoxDate>
                        <DayBlack>23</DayBlack>
                    </BoxDate>
                </BarDate>
                <BarDate>
                    <DayGray>Sáb</DayGray>
                    <BoxDate>
                        <DayBlack>23</DayBlack>
                    </BoxDate>
                </BarDate>
                <BarDate>
                    <DayGray>Dom</DayGray>
                    <BoxDate>
                        <DayBlack>23</DayBlack>
                    </BoxDate>
                </BarDate>
            </LargeBox>

            <ScrollHorizontal>
                <Body margins={calculateMargin()}>
                    <Card>
                        <BoxHour>
                            <DayBlack>05:30</DayBlack>
                            <DayBlack type={2}>- 07:00</DayBlack>
                        </BoxHour>
                        <Box>
                            <TitleEvent>Busca e Intercessão</TitleEvent>
                            <BoxImg>
                                <ImgEvent />
                            </BoxImg>
                        </Box>
                    </Card>
                </Body>
                <Body margins={calculateMargin()}>
                    <Card>
                        <BoxHour>
                            <DayBlack>05:30</DayBlack>
                            <DayBlack type={2}>- 07:00</DayBlack>
                        </BoxHour>
                        <Box>
                            <TitleEvent>Busca e Intercessão</TitleEvent>
                            <BoxImg>
                                <ImgEvent />
                            </BoxImg>
                        </Box>
                    </Card>
                </Body>
            </ScrollHorizontal>
        </Container>
    )
}

const Container = styled.View`
    ${CenterColumn}
    width: 100%;
`


const TextBlack = styled.Text`
    color: ${Colors.primary};
    font-family: ${Fonts.bold};
    font-size: 18px;
    text-align: center;
    width: 100%;
`

const LargeBox = styled.View`
    ${MiddleCenterRow}
    justify-content: space-between;
    width: 100%;
    margin-bottom: 10px;
`

const BarDate = styled.View`
    ${MiddleCenterColumn}
    justify-content: space-between;
    width: 14.2%;
`

const DayGray = styled.Text`
    font-size: 14px;
    color: ${Colors.middleGray};
    font-family: ${Fonts.bold};
    margin: 8px 0px;
`

const BoxDate = styled.TouchableOpacity`
    ${MiddleCenterColumn}
    justify-content: space-between;
    height: 56px;
    padding: 8px;
    border-radius: 12px;
    background-color: ${props => props.type == 1 ? Colors.secondary : 'transparent'};
`

const DayBlack = styled.Text`
    font-size: ${props => props.type == 2 ? 10 : 14}px;
    color: ${props => props.type == 1 ? Colors.white : Colors.primary};
    font-family: ${Fonts.bold};
`

const ScrollHorizontal = styled.ScrollView.attrs({
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    horizontal: true
})`
    width: 100%;
    background-color: pink;
`

const Body = styled.View`
    ${CenterColumn}
    margin: 0px ${props => props.margins}px;
`

const Card = styled.View`
    ${MiddleCenterRow}
    justify-content: space-between;
    width: 300px;
    padding: 10px 0px;
    border: solid 1px ${Colors.black};
`

const BoxHour = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 60px;
    height: 50px;
    padding: 5px;
    border-left-width: 4px;
    border-left-color: ${Colors.secondary};
`

const Box = styled.View`
    ${MiddleCenterRow}
    justify-content: space-between;
    width: 230px;
    height: 100px;
    border-top-left-radius: 10px;
    border-top-right-radius: 32px;
    border-bottom-left-radius: 32px;
    border-bottom-right-radius: 10px;
    background-color: ${Colors.smoothGray};
`

const BoxImg = styled.View`
    width: 120px;
    height: 100px;
    border-top-left-radius: 10px;
    border-top-right-radius: 32px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`

const ImgEvent = styled.Image.attrs({ source: { uri: 'https://3rf8l24fn89f1vqe8a2o4a3f-wpengine.netdna-ssl.com/wp-content/uploads/2019/11/hanny-naibaho-aWXVxy8BSzc-unsplash-1024x683.jpg' }, resizeMode: 'cover' })`
    width: 100%;
    height: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 32px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`

const TitleEvent = styled.Text`
    flex: 1;
    padding: 5px;
    text-align: center;
    font-size: 16px;
    line-height: 15px;
    color: ${Colors.primary};
    font-family: ${Fonts.bold};
`
