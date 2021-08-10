//import liraries
import React from 'react';
import { View, Text } from 'react-native';
import { theme } from '../../global/theme';
import { Avatar } from '../Avatar';
import { styles } from './styles'

export type MemberProps = {
    id: string;
    userName: string;
    avatar_url: string;
    status: string;

}
type Props = {
    data: MemberProps
}
const Member = ({ data }: Props) => {
    const { on, primary } = theme.colors
    const isOnline = data.status === 'online'
    return (
        <View style={styles.container}>
            <Avatar urlImage={data.avatar_url} />
            <View>
                <Text style={styles.title}>
                    {data.userName}
                </Text>
            </View>
            <View style={styles.status}>
                <View
                    style={[styles.bulletStatus,
                    {
                        backgroundColor: isOnline ? on : primary
                    }]}
                />
                <Text style={styles.nameStatus}>
                    {isOnline ? 'Disponivel' : 'Ocupado'}
                </Text>
            </View>
        </View>
    );
};



export default Member;
