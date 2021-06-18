import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
    return (
        <View style={styles.header} >
            <Text style={styles.text} >
                Weather - Native Demo
            </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    header: {
        height: 50,
        marginTop: 20,
        width: '100%',
        textAlign: 'center',
        backgroundColor: '#2ea44f',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: '800',
        color: '#fff'
    }
})

export default Header;
