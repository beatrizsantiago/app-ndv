import React, { useEffect } from 'react'

import TabHeader from '../components/TabHeader'
import BoxEvents from '../components/BoxEvents'

import { Scroll } from './styles/MainStyled'
import {  } from './styles/HomeStyled'

import Colors from '../themes/Colors'

export default Home = (props) => {

    return (
        <Scroll>
            <TabHeader {...props} colorItems={Colors.secondary} />
            <BoxEvents />
        </Scroll>
    )
}
