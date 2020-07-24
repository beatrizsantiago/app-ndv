import React, { useEffect, useState } from 'react'
import { Linking } from 'react-native'
import NetInfo from "@react-native-community/netinfo"

import HomeService from '../services/HomeService'

import TabHeader from '../components/TabHeader'
import BoxEvents from '../components/BoxEvents'
import Loading from '../components/Loading'
import AlertAnimated from '../components/AlertAnimated'

import { Scroll } from './styles/MainStyled'
import { Line, Title, Card, Banner, TextCard } from './styles/HomeStyled'

import Colors from '../themes/Colors'

export default Home = (props) => {

    const [preaching, setPreaching] = useState({})
    const [showAlert, setShowAlert] = useState(false)
    const [messageAlert, setMessageAlert] = useState('')
    const [loading, setLoading] = useState(false)

    const openAlert = message => {
        setMessageAlert(message)
        setShowAlert(true)
        setLoading(false)
    }

    useEffect(() => {
        getInfos()
    }, [])

    const getInfos = () => {
        setLoading(true)
        NetInfo.fetch().then(state => {
            if (state.isConnected) {
                HomeService.LastPreaching()
                    .then(resp => {
                        setPreaching(resp)
                        setLoading(false)
                    })
                    .catch(error => {

                    })

            } else {
                openAlert('É necessário ter internet para continuar.')
                setLoading(false)
            }
        })
    }

    const openYoutube = () => {
        let splitUrl = preaching.url.split('.com/')
        Linking.canOpenURL(`youtube://${splitUrl[0]}`).then(supported => {
            if (supported) {
                return Linking.openURL(`youtube://${splitUrl[0]}`)
            } else {
                return Linking.openURL(preaching.url)
            }
        })
    }

    return (
        <Scroll>
            <TabHeader {...props} colorItems={Colors.secondary} />
            <BoxEvents />
            <Line />

            {
                loading ?
                    <Loading />
                    :
                    <>
                        <Title>Assista a última pregração</Title>
                        <Card onPress={() => openYoutube()}>
                            <Banner source={{ uri: preaching.banner || '' }} />
                            <TextCard>{preaching.title || ''}</TextCard>
                            <TextCard type={1}>{preaching.preacher || ''}</TextCard>
                        </Card>
                    </>
            }

            <AlertAnimated show={showAlert} onConfirmPressed={() => setShowAlert(false)} message={messageAlert} />
        </Scroll>
    )
}
