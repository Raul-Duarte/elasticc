import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { Avatar } from 'react-native-elements'

const InfoTreiner = () => {
    return (

        <View style={styles.container}>
            <View style={styles.avatar}>
                <Avatar
                    size="large"
                    rounded
                    icon={{ name: 'flag', color: '#e84a5b' }}
                    onPress={() => console.log('SERIES')}
                />
                <Text>SERIES</Text>
                <Text>0/1</Text>
            </View>
            <View style={styles.avatar}>
                <Avatar size="large"
                    rounded
                    icon={{ name: 'refresh', color: '#e84a5b' }}
                    onPress={() => console.log('REPETIÇÕES')}
                />
                <Text>REPETIÇÕES</Text>
                <Text>0/1</Text>
            </View>
            <View style={styles.avatar}>
                <Avatar size="large"
                    rounded
                    icon={{ name: 'home', color: '#e84a5b' }}
                    onPress={() => console.log('PESO')}
                />
                <Text>PESO</Text>
                <Text>0.00 kg</Text>
            </View>
            <View style={styles.avatar}>
                <Avatar size="large"
                    rounded
                    icon={{ name: 'home', color: '#e84a5b' }}
                    onPress={() => console.log('MÁXIMO')}
                />
                <Text>MÁXIMO</Text>
                <Text>0.00 kg</Text>
            </View>
        </View>
    )
}

export default InfoTreiner;

const styles = StyleSheet.create({

    container: {
        borderBottomColor: '#A8A8A8',
        borderStyle: "solid",
        borderBottomWidth: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    avatar: {
        margin: 10,
        alignItems: 'center',
    }

})