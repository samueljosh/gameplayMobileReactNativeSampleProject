//import liraries
import React, { Component } from 'react';
import { View, TextInput, StyleSheet, TextInputProps } from 'react-native';
import { styles } from './styles'
// create a component
const SmallInput = ({ ...rest }: TextInputProps) => {
    return (
        <TextInput
            style={styles.container}
            keyboardType="numeric"
            {...rest}
        />
    );
};


//make this component available to the app
export default SmallInput;
