import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Avatar } from 'react-native-elements'


const InfoTreiner = () => {
    return (
        <View style={styles.container}>
            <View style={styles.avatar}>
                <Avatar size="large" rounded icon={{ name: 'flag', color: '#e84a5b' }} />
                <Text>Series</Text>
                <Text>0/1</Text>
            </View>
            <View style={styles.avatar}>
                <Avatar size="large" rounded icon={{ name: 'refresh', color: '#e84a5b' }} />
                <Text>Series</Text>
                <Text>0/1</Text>
            </View>
            <View style={styles.avatar}>
                <Avatar size="large" rounded icon={{ name: 'home', color: '#e84a5b' }} />
                <Text>Series</Text>
                <Text>0/1</Text>
            </View>
            <View style={styles.avatar}>
                <Avatar size="large" rounded icon={{ name: 'home', color: '#e84a5b' }} />
                <Text>Series</Text>
                <Text>0/1</Text>
            </View>
        </View>
    )
}

export default InfoTreiner;

const styles = StyleSheet.create({
    container: {
        borderBottomColor: '#A8A8A8',
        borderStyle: "solid",
        borderBottomWidth: 5,
        flexDirection:'row'

    },
    avatar: {
        margin:10,
        alignItems:'center',
    }
})