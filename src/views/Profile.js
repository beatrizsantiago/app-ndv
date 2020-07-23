import React, { useEffect } from 'react'

import TabHeader from '../components/TabHeader'
import Input from '../components/Input'

import { Scroll } from './styles/MainStyled'
import { Background, Header, Circle, LargeBox, Name, Box } from './styles/ProfileStyled'

import Colors from '../themes/Colors'

export default Profile = (props) => {
    return (
        <Scroll>
            <Header>
                <Background />
                <TabHeader {...props} />
                <Circle>

                </Circle>
            </Header>
            <LargeBox>
                <Name>Ana Beatriz Santiago</Name>
            </LargeBox>
            <Box>
                <Input label="E-mail" value="beatrizsantiago1999@gmail.com" editable={false} textAlign="right" />
                <Input label="Telefone" value="(85) 98523-6985" editable={false} textAlign="right" />
            </Box>
        </Scroll>
    )
}
