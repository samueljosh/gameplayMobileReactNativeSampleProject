import React, { useState } from 'react'
import { ImageBackground, Text, View } from 'react-native'
import { Fontisto } from '@expo/vector-icons'
import { BorderlessButton, FlatList } from 'react-native-gesture-handler'
import { Background } from '../../components/Background'
import { Header } from '../../components/Header'
import { theme } from '../../global/theme'
import BannerImg from '../../assets/banner.png'
import { styles } from './styles'
import { ListHeader } from '../../components/ListHeader'
import Member from '../../components/Member'
import ListDivider from '../../components/ListDivider'
import { ButtonIcon } from '../../components/ButtonIcon'

export function AppointmentDetails() {
    const members = [{
        id: '1',
        userName: 'Samuel',
        avatar_url: 'https://github.com/samueljosh.png',
        status: 'online'
    },
    {
        id: '2',
        userName: 'Joshua',
        avatar_url: 'https://github.com/samueljosh.png',
        status: 'offline'
    }

    ]
    return (
        <Background>
            <Header title="Detalhes"
            
                action={
                <BorderlessButton >

                    <Fontisto
                        name="share"
                        size={24}
                        color={theme.colors.primary}
                    />

                </BorderlessButton>
                }
            />
            <ImageBackground
                source={BannerImg}
                style={styles.banner}
            >
                <View style={styles.bannerContent}>
                    <Text
                        style={styles.title}
                    >
                        Lendários
                    </Text>
                    <Text
                        style={styles.subtitle}
                    >
                        É hoje que vamos chegar ao challenger
                        sem perder uma partida da md10
                    </Text>
                </View>
            </ImageBackground>
            <ListHeader title="jogadores"
                subtitle="Total 3"
            />
            <FlatList
                data={members}
                style={styles.members}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={() => <ListDivider />}
                renderItem={({ item }) => (
                    <Member data={item} />
                )}

            />
            <View style={styles.footer}>
                <ButtonIcon
                    title="Entrar na partida"
                />
            </View>
        </Background>
    )

}