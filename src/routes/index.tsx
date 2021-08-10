import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AuthRotes } from './auth.routes'


export function Routes() {
    return (
        <NavigationContainer>
            <AuthRotes />
        </NavigationContainer>
    )

}