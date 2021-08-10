import { theme } from './../../global/theme';
// define your styles

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width:48,
        height:48,
        backgroundColor: theme.colors.secondary40,
        color: theme.colors.heading,
        borderRadius:8,
        fontFamily: theme.fonts.text400,
        fontSize:13,
        marginRight:4,
        textAlign:'center'
    },
});
