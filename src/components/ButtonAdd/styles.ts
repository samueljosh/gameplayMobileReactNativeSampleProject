import { theme } from './../../global/theme';
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create ({
    container:{
        height:48,
        width:48,
        backgroundColor:theme.colors.primary,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:8
    },
}) ;