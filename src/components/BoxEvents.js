import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import moment from 'moment'

import HomeService from '../services/HomeService'

import Colors from '../themes/Colors'
import Fonts from '../themes/Fonts'

import { MiddleCenterColumn, MiddleCenterRow, CenterColumn } from '../themes/StyleConstants'

export default BoxEvents = () => {

    const [allEvents, setAllEvents] = useState({})
    const [activeDay, setActiveDay] = useState(new Date())
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getEvents()
    }, [])

    const getEvents = () => {
        setLoading(true)
        HomeService.Events()
            .then(resp => {
                setAllEvents(resp)
                setLoading(false)
            })
            .catch(error => {

            })
    }

    const showEvents = () => {
        let valuesWeekday = Object.values(allEvents)
        let selectEventDay = valuesWeekday.find(event => moment(event.date).format('YYYY-MM-DD') == moment(activeDay).format('YYYY-MM-DD'))

        return selectEventDay?.events.map((event, index) => (
            <Card key={index}>
                <BoxHour>
                    <DateBlack>{event.startTime}</DateBlack>
                    <DateBlack type={2}>- {event.endTime}</DateBlack>
                </BoxHour>
                <Box>
                    <TitleEvent>{event.name}</TitleEvent>
                    <BoxImg>
                        <ImgEvent />
                    </BoxImg>
                </Box>
            </Card>
        ))
    }

    const listEventsDay = (day) => {
        setActiveDay(day)
    }

    const getType = (date) => {
        let today = moment(new Date).format('YYYY-MM-DD')
        let dateParam = moment(date).format('YYYY-MM-DD')

        if (dateParam == today) {
            return 1
        } else if (dateParam == moment(activeDay).format('YYYY-MM-DD')) {
            return 2
        } else {
            return 0
        }
    }

    const showDates = () => {
        let keyEvents = Object.keys(allEvents)
        return keyEvents.map((key, index) => (
            <BarDate key={index}>
                <DayGray>{moment(allEvents[key]?.date).format('ddd')}</DayGray>
                <BoxDate type={getType(allEvents[key]?.date)} onPress={() => listEventsDay(allEvents[key].date)}>
                    <DayBlack type={getType(allEvents[key]?.date)}>{moment(allEvents[key]?.date).format('DD')}</DayBlack>
                    {getType(allEvents[key]?.date) == 1 ? <DayBlack type={1}>Hoje</DayBlack> : null}
                </BoxDate>
            </BarDate>
        ))
    }

    return (
        <Container>
            {
                !loading ?
                    <>
                        <TextBlack>{moment(new Date).format('MMMM')}</TextBlack>
                        <LargeBox>
                            {showDates()}
                        </LargeBox>
                        <Body>
                            {showEvents()}
                        </Body>
                    </>
                    : null
            }
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
    width: 48px;
    height: 56px;
    padding: 8px;
    border-radius: 12px;
    background-color: ${props => props.type == 1 ? Colors.secondary : (props.type == 2 ? Colors.smoothGray : 'transparent')};
`

const DayBlack = styled.Text`
    font-size: 14px;
    color: ${props => props.type == 1 ? Colors.white : Colors.primary};
    font-family: ${Fonts.bold};
`

const Body = styled.View`
    ${CenterColumn}
    width: 100%;
`

const Card = styled.View`
    ${MiddleCenterRow}
    justify-content: space-between;
    width: 95%;
    padding: 10px 0px;
`

const BoxHour = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80px;
    padding: 10px;
    border-left-width: 5px;
    border-left-color: ${Colors.secondary};
`

const DateBlack = styled.Text`
    font-size: ${props => props.type == 2 ? 14 : 18}px;
    color: ${Colors.primary};
    font-family: ${Fonts.bold};
`

const Box = styled.View`
    ${MiddleCenterRow}
    justify-content: space-between;
    flex: 1;
    height: 100px;
    border-top-left-radius: 10px;
    border-top-right-radius: 32px;
    border-bottom-left-radius: 32px;
    border-bottom-right-radius: 10px;
    background-color: ${Colors.backgroundGray};
`

const BoxImg = styled.View`
    width: 150px;
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
